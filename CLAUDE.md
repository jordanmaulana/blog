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

Production image: `docker build -t jordanmaulana-site .` then run on port 80 (multi-stage Dockerfile, `serve` on top of static `dist/`).

## Architecture

Static Astro 5 site with **dual-locale routing** (`en` default, `id`) and three content collections.

### Locale routing pattern

`astro.config.mjs` sets `prefixDefaultLocale: false`, so EN lives at `/...` and ID lives at `/id/...`. The `src/pages/` tree mirrors this: every page that exists at the root (`index.astro`, `about.astro`, `blog/`, `lapak/`, `products/`, `rss.xml.ts`) **also exists under `src/pages/id/`**. When adding a new page, add both copies — there is no automatic mirroring. Inside any `.astro` file the locale is derived from the URL:

```ts
const lang = getLangFromUrl(Astro.url);   // "en" | "id"
const t = useTranslations(lang);
```

UI strings live in [`src/i18n/ui.ts`](src/i18n/ui.ts) as a flat `{ en: {...}, id: {...} }` map — add keys to **both** locales. Use `localizedPath(lang, "/blog")` to build cross-locale links; never hardcode `/id/...`.

### Content collections

Defined in [`src/content.config.ts`](src/content.config.ts) with Zod schemas. Three collections:

- **`blog`** — loaded from `src/content/blog/**/*.{md,mdx}`. The locale comes from the **folder** (`en/` vs `id/`), not the frontmatter. Collection IDs therefore look like `en/hello-world`, and the `[slug]` dynamic routes use `post.id.replace(/\.mdx?$/, "")` as the slug — meaning a post at `src/content/blog/en/hello-world.mdx` becomes `/blog/en/hello-world` (the locale prefix is part of the slug, not the URL prefix). Both `src/pages/blog/[slug].astro` and `src/pages/id/blog/[slug].astro` generate paths for the **entire** collection; the i18n separation is currently only enforced by where the post is authored.
- **`products`** — single collection, shared across locales (English copy for now). Sorted by `order`.
- **`lapak`** — used-goods listings. Schema requires at least one image via Astro's `image()` helper; filter by `status === "available"` when listing.

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
- `sharp` is a direct dependency for Astro's image pipeline (used by the `lapak` collection's `image()` schema).
