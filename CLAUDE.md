# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **pnpm** (pinned via `packageManager` in `package.json`).

```sh
pnpm dev          # astro dev on http://localhost:4321
pnpm dev:fresh    # nuke .astro + vite cache, then dev
pnpm build        # static build → ./dist
pnpm preview      # serve ./dist locally
pnpm check        # astro type-check (run before declaring work done)
```

There is no test suite and no linter — `pnpm check` is the only verification step.

Production image: `docker build -t jordanmaulana-site .` then run on port 3000 (multi-stage Dockerfile: Node build stage → `serve` serving static `dist/` on `:3000`, with a wget healthcheck).

## Architecture

Static Astro 5 site with **dual-locale routing** (`en` default, `id`) and four content collections.

### Locale routing pattern

`astro.config.mjs` sets `prefixDefaultLocale: false`, so EN lives at `/...` and ID lives at `/id/...`. The `src/pages/` tree mirrors this: every page that exists at the root (`index.astro`, `about.astro`, `blog/`, `gears/`, `lapak/`, `products/`, `rss.xml.ts`) **also exists under `src/pages/id/`**. When adding a new page, add both copies — there is no automatic mirroring. Inside any `.astro` file the locale is derived from the URL:

```ts
const lang = getLangFromUrl(Astro.url);   // "en" | "id"
const t = useTranslations(lang);
```

UI strings live in [`src/i18n/ui.ts`](src/i18n/ui.ts) as a flat `{ en: {...}, id: {...} }` map — add keys to **both** locales. Use `localizedPath(lang, "/blog")` to build cross-locale links; never hardcode `/id/...`.

### Content collections

Defined in [`src/content.config.ts`](src/content.config.ts) with Zod schemas. Four collections, all loaded flat from `src/content/<collection>/**/*.{md,mdx}` (no per-locale folders):

- **`blog`** — `[slug]` routes use `post.id.replace(/\.mdx?$/, "")` as the slug, so `src/content/blog/hello-world.mdx` → `/blog/hello-world`. There is **no locale separation** in the collection: both `src/pages/blog/[slug].astro` and `src/pages/id/blog/[slug].astro` generate paths for the **entire** collection (and both index pages list it all). Filter drafts with `({ data }) => !data.draft`.
- **`products`** — single collection, shared across locales (English copy for now). Sorted by `order`.
- **`gears`** — hardware links. Each entry has a `url`; its preview image is **not** stored in the repo but prefetched at build time (see OG-image prefetch below). Categories are derived at runtime via [`src/lib/gear-categories.ts`](src/lib/gear-categories.ts) (`getUniqueCategories` + `slugifyCategory`), driving the `gears/[category].astro` filter routes.
- **`lapak`** — used-goods listings. Schema requires ≥1 image via Astro's `image()` helper (the `photos` array); photos live in `src/assets/lapak/<slug>/` and are referenced by relative path in frontmatter. Filter by `status === "available"` when listing. Prices format through `formatIDR` in [`src/utils/format.ts`](src/utils/format.ts).

### OG-image prefetch

[`src/integrations/og-prefetch.ts`](src/integrations/og-prefetch.ts) is a custom Astro integration that runs at `astro:config:setup`. It reads every `gears` entry's `url`, scrapes its OpenGraph image with `open-graph-scraper`, and caches the downloaded file into `src/assets/og-cache/` (keyed by a SHA-1 hash of the URL, via [`src/lib/og-image.ts`](src/lib/og-image.ts)). Pages then resolve a cached `ImageMetadata` with `getOgImageMetadata(url)` from [`src/lib/og-lookup.ts`](src/lib/og-lookup.ts). The cache directory is committed; deleting it just forces a re-fetch on the next build.

### Styling

Tailwind CSS v4 via the Vite plugin (no `tailwind.config.js`). Design tokens are declared in [`src/styles/global.css`](src/styles/global.css) — light values in `@theme`, dark overrides in `:root.dark`. Everything else uses utility classes plus CSS variables like `var(--color-fg-soft)`. Dark mode is the default; the `ThemeToggle.tsx` React island flips the `dark` class on `<html>`.

### React islands

React is only used for small interactive bits — keep `.tsx` files focused on stateful UI. Pages and layout shells stay `.astro`. Motion comes from `motion` (formerly Framer Motion) via [`src/components/motion/FadeIn.tsx`](src/components/motion/FadeIn.tsx), hydrated with `client:visible`.

### Path alias

`~/*` → `src/*` (configured in [`tsconfig.json`](tsconfig.json)). Use it in imports rather than relative paths.

## Conventions worth knowing

- `trailingSlash: "never"` — don't append trailing slashes when building URLs by hand.
- The `materials/` directory is **seed material only**; it is not read at build time. Edit files under `src/content/` and `src/data/` instead.
- About-page content and socials are structured TypeScript in [`src/data/about.ts`](src/data/about.ts) and [`src/data/socials.ts`](src/data/socials.ts) — not MDX.
- `sharp` is a direct dependency for Astro's image pipeline (used by the `lapak` collection's `image()` schema and the prefetched OG images).
- Copy voice — blog, carousel decks, marketing lines — is governed by [`docs/voice.md`](docs/voice.md). Rule is **source or silence**: every published line traces to a file in this repo or to Jordan's own words. Never smooth, never invent, never bolt on a CTA.
