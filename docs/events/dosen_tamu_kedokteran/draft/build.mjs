// Builds the presentation draft: new slides from slides.html + unchanged pages
// from the original Pitch export, merged in the order of ../outline.md.
//
//   node events/dosen_tamu_kedokteran/draft/build.mjs
//
// Needs poppler (pdftoppm, pdfseparate, pdfunite), Google Chrome, and the repo's playwright.
import { execFileSync } from "node:child_process";
import { mkdir, mkdtemp, readdir } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const here = path.dirname(fileURLToPath(import.meta.url));
const base = path.join(here, "..", "Being professional abroad.pdf");
const out = path.join(here, "..", "presentation-draft.pdf");
const tmp = await mkdtemp(path.join(os.tmpdir(), "deck-"));
const sh = (cmd, ...args) => execFileSync(cmd, args, { stdio: "inherit" });

// Page crops slides.html pulls in (n8n tweet from p.14). Rendered at 4000px so the
// small tweet text stays sharp; crop coordinates in slides.html stay in 2000px units.
await mkdir(path.join(here, "assets"), { recursive: true });
for (const p of [14]) {
  const name = path.join(here, "assets", `p${String(p).padStart(2, "0")}`);
  sh("pdftoppm", "-png", "-singlefile", "-f", `${p}`, "-l", `${p}`, "-scale-to-x", "4000", "-scale-to-y", "-1", base, name);
}

const browser = await chromium.launch({ channel: "chrome" }); // installed Google Chrome, no playwright download
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
await page.goto(`file://${path.join(here, "slides.html")}`, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.pdf({ path: path.join(tmp, "new.pdf"), width: "1920px", height: "1080px", printBackground: true });
await browser.close();

sh("pdfseparate", base, path.join(tmp, "orig-%d.pdf"));
sh("pdfseparate", path.join(tmp, "new.pdf"), path.join(tmp, "new-%d.pdf"));

const newPages = (await readdir(tmp)).filter((f) => f.startsWith("new-")).length;
if (newPages !== 12) throw new Error(`slides.html should render 12 slides, got ${newPages}`);

// N = page of slides.html, O = page of the original deck. Slide numbers match outline.md.
const order = [
  "N1", "N2", "O4",                                        // 01 Introduction (1–3)
  ...Array.from({ length: 9 }, (_, i) => `N${i + 3}`),     // 02 Building systems (4–12)
  "N12",                                                   // hinge: n8n tweet (13)
  "O8", "O9", "O10", "O11", "O15",                         // 03 Building yourself (14–18)
  "O16",                                                   // QnA (19)
];
sh("pdfunite", ...order.map((k) => path.join(tmp, `${k[0] === "N" ? "new" : "orig"}-${k.slice(1)}.pdf`)), out);
console.log(`wrote ${path.relative(process.cwd(), out)} (${order.length} slides)`);
