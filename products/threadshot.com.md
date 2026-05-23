# About Threadshot

Threadshot is a tiny web app that turns any public [Threads](https://www.threads.com) post into a clean PNG you can share. Paste the post URL, get a self-contained screenshot back. That's the whole product.

## Why

Sharing Threads posts elsewhere is awkward. Native screenshots include browser chrome, the Threads UI, and cookie banners. Linking to the post works until the media expires, the account goes private, or the post is deleted. Threadshot freezes the post into an image the moment you ask for it — no chrome, no broken media, no expiring URLs.

## How it works

1. **Scrape** — the Threads page is loaded in headless Chromium; `og:*` meta tags, the avatar, timestamp, and engagement counts are pulled from the live DOM.
2. **Render** — a Jinja card template is filled with that data. Avatar and media are re-fetched server-side and inlined as `data:` URIs so the card is fully offline-resolvable.
3. **Screenshot** — Playwright shoots the `#card` element at 2× scale and returns the PNG embedded in the response page (with a download link).

A single Chromium browser stays warm for the app's lifetime; each request gets a fresh context.

## Stack

- **FastAPI** + Uvicorn — HTTP layer.
- **Playwright (Chromium)** — both the scraper and the screenshotter.
- **Jinja2** — card and page templates.
- **Tailwind v4** — styling, pre-compiled into a committed `static/tailwind.css` (no Node at runtime).
- **slowapi** — per-IP rate limiting.
- **uv** — dependency management.
- Python **3.11+**.

## Features

- 10-minute in-memory cache keyed on canonical post URL.
- Per-IP rate limit (configurable, default `10/minute`).
- AdSense slot and Google Analytics hook (both disabled when the env var is empty).
- Docker image built on `mcr.microsoft.com/playwright/python` — Chromium pre-installed.
- Graceful error pages for bad URL (422), missing/private post (404), rate limit (429), block (502), render failure (500).

## Status

Working prototype. Monetization is stubbed (`ADSENSE_CLIENT`, `GA_MEASUREMENT_ID` env vars) but no business model is locked in yet. License is TBD.
