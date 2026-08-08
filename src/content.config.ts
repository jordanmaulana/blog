import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    heroImage: z.string().optional(),
  }),
});

const products = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/products" }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    url: z.string().url().optional(),
    repo: z.string().url().optional(),
    stack: z.array(z.string()).default([]),
    status: z.enum(["live", "prototype", "wip"]).default("wip"),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

const lapak = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/lapak" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      tagline: z.string(),
      price: z.number().int(),
      negotiable: z.boolean().default(false),
      condition: z.enum(["like-new", "good", "fair"]),
      status: z.enum(["available", "reserved", "sold"]).default("available"),
      photos: z.array(image()).min(1),
      order: z.number().default(99),
    }),
});

const gears = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/gears" }),
  schema: z.object({
    name: z.string(),
    url: z.string().url(),
    category: z.string(),
    order: z.number().default(99),
  }),
});

// Slide decks for Instagram carousels. Data-only (YAML), rendered by
// /carousel/[slug] and screenshotted by scripts/render-carousel.mjs.
// `kind` names stay neutral on purpose — the schema shouldn't nudge copy
// toward hook-shaped writing.
const carousels = defineCollection({
  loader: glob({ pattern: "**/*.{yaml,yml}", base: "./src/content/carousels" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      handle: z.string().default("@jordan.maulana"),
      slides: z
        .array(
          z.object({
            kind: z.enum(["plain", "zone", "matrix", "outro", "evidence", "list"]),
            label: z.string().optional(),
            heading: z.string().optional(),
            body: z.string().optional(),
            verdict: z.enum(["STAY", "RESIGN"]).optional(),
            // `evidence`: a screenshot, path relative to this YAML file.
            image: image().optional(),
            alt: z.string().optional(),
            // `list`: one row per string.
            items: z.array(z.string()).optional(),
          }),
        )
        .min(1),
    }),
});

export const collections = { blog, products, lapak, gears, carousels };
