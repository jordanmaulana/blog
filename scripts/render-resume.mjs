// Prints an ATS-friendly resume PDF from src/data/about.ts.
//
//   pnpm resume
//
// Output: resume-out/jordan-maulana-resume.pdf. No dev server needed — Node
// imports the .ts data files directly.
//
// ATS parsers read the text layer, not the layout: one column, no tables or
// icons, standard section headings, contact details as plain visible text.
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";
import {
  certifications,
  education,
  experience,
  profile,
  resumeSummary,
  skillGroups,
} from "../src/data/about.ts";
import { socials } from "../src/data/socials.ts";

const email = process.env.PUBLIC_CONTACT_EMAIL ?? "jordanmaulana26@gmail.com";
const linkedin = socials.find((s) => s.label === "LinkedIn").url;
const outFile = path.resolve("resume-out", "jordan-maulana-resume.pdf");

const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const bare = (url) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
const link = (href, text) => `<a href="${esc(href)}">${esc(text)}</a>`;

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>${esc(profile.name)} — Resume</title>
<style>
  * { margin: 0; padding: 0; }
  body {
    font: 10.5pt/1.4 Arial, Helvetica, sans-serif;
    color: #000;
    /* Ligatures turn "fi"/"fl" into one glyph that some parsers can't map
       back to letters. */
    font-variant-ligatures: none;
  }
  a { color: inherit; text-decoration: none; }
  h1 { font-size: 20pt; }
  .headline { font-size: 11.5pt; margin-top: 2pt; }
  .contact { margin-top: 4pt; }
  h2 {
    font-size: 11.5pt;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    border-bottom: 1px solid #000;
    margin: 14pt 0 6pt;
    padding-bottom: 2pt;
  }
  .entry { break-inside: avoid; margin-bottom: 8pt; }
  .entry h3 { font-size: 10.5pt; }
  ul { margin: 3pt 0 0 14pt; }
  li { margin-bottom: 1pt; }
  p + p { margin-top: 2pt; }
</style>
</head>
<body>
  <h1>${esc(profile.name)}</h1>
  <p class="headline">${esc(profile.role)}</p>
  <p class="contact">${esc(profile.location)} | ${link(`mailto:${email}`, email)} | ${link(linkedin, bare(linkedin))} | ${link("https://jordanmaulana.space", "jordanmaulana.space")}</p>

  <h2>Summary</h2>
  <p>${esc(resumeSummary)}</p>

  <h2>Experience</h2>
  ${experience
    .map(
      (job) => `<div class="entry">
    <h3>${esc(job.role)}</h3>
    <p>${esc(job.company)} | ${esc(job.type)} | ${esc(job.location)}</p>
    <p>${esc(job.start)} – ${esc(job.end)}</p>
    ${job.bullets ? `<ul>${job.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>` : ""}
  </div>`,
    )
    .join("\n  ")}

  <h2>Skills</h2>
  ${skillGroups.map((g) => `<p><strong>${esc(g.label)}:</strong> ${g.items.map(esc).join(", ")}</p>`).join("\n  ")}

  <h2>Education</h2>
  ${education
    .map(
      (e) => `<div class="entry">
    <h3>${esc(e.school)}</h3>
    <p>${esc(e.degree)} | ${esc(e.period)}</p>
    ${e.note ? `<p>${esc(e.note)}</p>` : ""}
  </div>`,
    )
    .join("\n  ")}

  <h2>Certifications</h2>
  <ul>
    ${certifications.map((c) => `<li>${esc(c.name)} — ${esc(c.issuer)}, ${esc(c.issued)}</li>`).join("\n    ")}
  </ul>
</body>
</html>`;

await mkdir(path.dirname(outFile), { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setContent(html, { waitUntil: "load" });
await page.pdf({
  path: outFile,
  format: "A4",
  margin: { top: "15mm", right: "15mm", bottom: "15mm", left: "15mm" },
  tagged: true,
});
await browser.close();

console.log(path.relative(process.cwd(), outFile));
