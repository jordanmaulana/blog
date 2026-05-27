// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import ogPrefetch from "./src/integrations/og-prefetch.ts";

export default defineConfig({
  site: "https://jordanmaulana.com",
  trailingSlash: "never",
  integrations: [
    ogPrefetch(),
    mdx(),
    react(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: { en: "en", id: "id-ID" },
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
