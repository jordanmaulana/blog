import type { AstroIntegration } from "astro";
import fs from "node:fs/promises";
import path from "node:path";
import { getOgImage } from "../lib/og-image.ts";

function extractUrl(content: string): string | null {
  const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fmMatch) return null;
  const urlMatch = fmMatch[1].match(/^url:\s*(.+)$/m);
  if (!urlMatch) return null;
  return urlMatch[1].trim().replace(/^['"]|['"]$/g, "");
}

export default function ogPrefetch(): AstroIntegration {
  return {
    name: "og-prefetch",
    hooks: {
      "astro:config:setup": async ({ logger }) => {
        const gearsDir = path.resolve(process.cwd(), "src/content/gears");

        let files: string[];
        try {
          const entries = await fs.readdir(gearsDir);
          files = entries
            .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
            .map((f) => path.join(gearsDir, f));
        } catch {
          logger.warn("No gears directory found, skipping OG prefetch");
          return;
        }

        const urls: string[] = [];
        for (const file of files) {
          const content = await fs.readFile(file, "utf-8");
          const url = extractUrl(content);
          if (url) urls.push(url);
        }

        if (urls.length === 0) {
          logger.info("No gear URLs found");
          return;
        }

        logger.info(`Prefetching OG images for ${urls.length} gears…`);

        const results = await Promise.allSettled(
          urls.map((url) => getOgImage(url)),
        );

        const fetched = results.filter(
          (r) => r.status === "fulfilled" && r.value !== null,
        ).length;
        logger.info(`OG images ready: ${fetched}/${urls.length}`);
      },
    },
  };
}
