// Screenshots each slide of a carousel deck to a PNG.
//
//   pnpm dev                        # in another terminal
//   pnpm carousel tutorial-resign
//
// Output: carousel-out/<slug>/01.png ... (2160x2700, ready for Instagram).
import { mkdir, readdir, rm } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const slug = process.argv[2];
const baseUrl = process.env.CAROUSEL_BASE_URL ?? "http://localhost:4321";
const decksDir = path.resolve("src/content/carousels");

if (!slug) {
  console.error("usage: pnpm carousel <slug>   (e.g. pnpm carousel tutorial-resign)");
  process.exit(1);
}

/** Deck slugs on disk — used to make a 404 actionable. */
async function availableSlugs() {
  try {
    const files = await readdir(decksDir);
    return files
      .filter((file) => /\.ya?ml$/.test(file))
      .map((file) => file.replace(/\.ya?ml$/, ""));
  } catch {
    return [];
  }
}

const outDir = path.resolve("carousel-out", slug);

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1080, height: 1350 },
  deviceScaleFactor: 2,
});

const url = `${baseUrl}/carousel/${slug}`;

// Three distinct failures, three distinct messages: a thrown navigation means
// nothing is listening, a 404 means the deck doesn't exist, anything else is
// the server's problem.
let response;
try {
  response = await page.goto(url, { waitUntil: "networkidle" });
} catch {
  await browser.close();
  console.error(`can't reach ${baseUrl} — is \`pnpm dev\` running?`);
  process.exit(1);
}

if (response?.status() === 404) {
  const slugs = await availableSlugs();
  await browser.close();
  console.error(`no deck named "${slug}"`);
  console.error(
    slugs.length > 0
      ? `available: ${slugs.join(", ")}`
      : `no decks yet in ${path.relative(process.cwd(), decksDir)}`,
  );
  process.exit(1);
}

if (!response || !response.ok()) {
  await browser.close();
  console.error(`could not load ${url} (${response?.status() ?? "no response"})`);
  process.exit(1);
}

const slides = page.locator("[data-slide]");
const count = await slides.count();

if (count === 0) {
  await browser.close();
  console.error(`no [data-slide] elements at ${url} — wrong slug?`);
  process.exit(1);
}

// Only now that a render is certain: a failed run shouldn't leave an empty
// carousel-out/<slug>/ behind.
await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });

for (let i = 0; i < count; i++) {
  const slide = slides.nth(i);
  const number = await slide.getAttribute("data-slide");
  const file = path.join(outDir, `${number}.png`);
  await slide.screenshot({ path: file });
  console.log(`  ${path.relative(process.cwd(), file)}`);
}

await browser.close();
console.log(`\n${count} slides → ${path.relative(process.cwd(), outDir)}`);
