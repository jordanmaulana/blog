# jordanmaulana.com

Personal website for [Jordan Maulana](https://www.linkedin.com/in/jordan-maulana/) — portfolio, product showcase, link-in-bio hub, and bilingual (EN / ID) tech blog. Static site, no runtime backend.

## Stack

- [Astro 5](https://astro.build) — static site generator, native i18n + MDX.
- [Tailwind CSS v4](https://tailwindcss.com) — design tokens via `@theme`. Dark mode by default.
- React 19 — used only for the small interactive islands (theme toggle, hero animations).
- [motion](https://motion.dev) (formerly Framer Motion) — scroll-triggered fade-ins.
- nginx (Alpine) — serves the built static bundle in production.

## Run it locally

```sh
pnpm install
pnpm dev          # http://localhost:4321
pnpm check        # astro type-check
pnpm build        # outputs ./dist
pnpm preview      # serve ./dist on a local port
```

## Writing a new blog post

1. Pick a locale folder:
   - English → `src/content/blog/en/`
   - Bahasa Indonesia → `src/content/blog/id/`
2. Create a new file: `my-post.mdx`.
3. Add frontmatter:

   ```mdx
   ---
   title: My new post
   description: One-sentence summary used for previews and meta.
   pubDate: 2026-05-23
   tags:
     - flutter
     - learning
   lang: en              # must match the folder
   draft: false          # set to true to hide
   ---

   Write the post here. MDX means you can drop in components if you need them.
   ```

4. Save. Dev server picks it up; production needs a rebuild.

The post appears on:

- `/blog` (or `/id/blog`)
- The home page (most recent 4)
- `/rss.xml` (or `/id/rss.xml`)

## Adding or editing a product

Files live in `src/content/products/<slug>.mdx`. Both locales share the same product MDX for now (English copy). Frontmatter schema:

```mdx
---
name: Product Name
tagline: One-sentence pitch.
url: https://example.com           # optional
repo: https://github.com/...       # optional
stack:
  - Django
  - React
status: live                       # live | prototype | wip
order: 1                           # sort key on listings
---
```

## Changing the design

Most visual changes happen in two files:

- **`src/styles/global.css`** — color tokens, fonts, radius. Tweak the `@theme` block (light values) and `:root.dark` (dark values).
- **`src/layouts/BaseLayout.astro`** — page shell, header, footer, meta.

Tailwind utility classes everywhere else. Update `src/components/*.astro` for layout tweaks; React islands live alongside.

## Translations

UI strings live in [`src/i18n/ui.ts`](src/i18n/ui.ts). Add a key under both `en` and `id`, then reference it with `t("your.key")` in any `.astro` file:

```astro
---
import { getLangFromUrl, useTranslations } from "~/i18n/utils";
const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---
<h1>{t("hero.title")}</h1>
```

## Updating the CV / About page

The `/about` and `/id/about` pages render from structured data in [`src/data/about.ts`](src/data/about.ts) — experience, education, certifications, skill groups. Edit that file; the layout updates automatically.

Socials → [`src/data/socials.ts`](src/data/socials.ts).

## Deploy to your VPS

The repo ships a multi-stage `Dockerfile` that builds the site and serves it with nginx.

```sh
docker build -t jordanmaulana-site .
docker run -d --name jordanmaulana-site -p 8080:80 --restart unless-stopped jordanmaulana-site
```

Put it behind your existing reverse proxy (Caddy, Traefik, nginx) and point your domain at it.

To rebuild with new content, re-run `docker build` and recreate the container.

## Folder layout

```
src/
├── components/        # Astro + React UI
├── content/
│   ├── blog/{en,id}/  # MDX posts per locale
│   └── products/      # MDX product pages
├── content.config.ts  # Zod schemas for collections
├── data/              # Structured TS data (about, socials)
├── i18n/              # UI strings + locale helpers
├── layouts/           # Page shells
├── pages/
│   ├── index.astro    # EN routes
│   └── id/            # ID mirror
└── styles/global.css  # Tailwind v4 + design tokens
```

`materials/` is the original source of truth (about-me, links, photo, product write-ups). It is **not** read at build time — content was seeded from it once and now lives under `src/`.
