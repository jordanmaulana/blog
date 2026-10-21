// Screenshots the homepage OG card (src/pages/og/home.astro) to a PNG.
//
//   pnpm dev                        # in another terminal
//   pnpm og
//
// Output: public/og/home.png (1200x630). Commit it — the site serves it as-is.
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const baseUrl = process.env.OG_BASE_URL ?? "http://localhost:4321";
const url = `${baseUrl}/og/home`;
const file = path.resolve("public/og/home.png");

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });

let response;
try {
  response = await page.goto(url, { waitUntil: "networkidle" });
} catch {
  await browser.close();
  console.error(`can't reach ${baseUrl} — is \`pnpm dev\` running?`);
  process.exit(1);
}

if (!response || !response.ok()) {
  await browser.close();
  console.error(`could not load ${url} (${response?.status() ?? "no response"})`);
  process.exit(1);
}

// Astro's dev toolbar is position:fixed and would land inside the screenshot.
await page.addStyleTag({ content: "astro-dev-toolbar { display: none !important }" });
await page.waitForFunction(() =>
  Array.from(document.images).every((img) => img.complete && img.naturalWidth > 0),
);

await mkdir(path.dirname(file), { recursive: true });
await page.locator("[data-og]").screenshot({ path: file });
await browser.close();
console.log(`  ${path.relative(process.cwd(), file)}`);
