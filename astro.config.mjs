// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import ogPrefetch from "./src/integrations/og-prefetch.ts";

export default defineConfig({
  site: "https://jordanmaulana.space",
  trailingSlash: "never",
  integrations: [
    ogPrefetch(),
    mdx(),
    react(),
    sitemap({
      // Consolidated to EN canonicals: keep only canonical URLs out of the sitemap,
      // and drop hreflang alternates (the /id/* pages are duplicates, not translations).
      filter: (page) => {
        const p = new URL(page).pathname;
        // /carousel/* is internal tooling for generating Instagram slides.
        return p !== "/id" && !p.startsWith("/id/") && !p.startsWith("/carousel/");
      },
    }),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "id"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
