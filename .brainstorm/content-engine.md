# Content Engine — top-of-funnel that feeds every money lever

Only 2 posts exist today. Content is the fuel: each post drives SEO discovery →
newsletter capture → a product (or advisory). Your build-in-public product
journeys are ready-made material — you already did the hard part (shipping).

## The rule for every post

1. **Pick one product or lesson** it funnels to.
2. **End with a call to action**: the newsletter signup + a link to that product.
3. **Repurpose** the same idea 3 ways: full post here + Medium (canonical link
   back), a short build-log on YouTube/Threads, one teaser on Threads/LinkedIn.
4. **Language by intent**: EN for authority/SEO + the global/advisory audience;
   ID (casual "kamu") for the product audience (job seekers, warung owners).

## Cadence (realistic with a full-time job)

- **1 post every 2 weeks.** Alternate EN-authority ↔ ID-product.
- Batch: draft on weekends, schedule. Don't chase daily — chase consistent.
- Track which posts convert (analytics + newsletter signups) and do more of that.

## Starter calendar (first 6)

| # | Lang | Working title | Funnels to |
|---|------|---------------|-----------|
| 1 | EN | How I built an AI that scores every job posting against your LinkedIn | cariinkerja.id |
| 2 | ID | Bikin bot Telegram pencatat keuangan pakai Django + OpenAI Agents SDK | ngaturduit.my.id |
| 3 | EN | GPT-4o structured output in Django: Pydantic schemas that don't hallucinate | cariinkerja + advisory |
| 4 | ID | POS buat warung: kenapa aku bikin KasirKelontong offline-first | kasirkelontong.com |
| 5 | EN | Untangling a 300-node n8n workflow: what I'd do differently | advisory / authority |
| 6 | ID | Dari Flutter ke full-stack + AI: peta belajar 8 tahun | newsletter / about |

EN posts target search terms recruiters/founders/devs actually type (authority →
inbound advisory + SaaS trust). ID posts meet your product users where they are.

## Two outlines ready to draft

### Post 1 (EN) — "How I built an AI that scores every job posting against your LinkedIn"
- **Hook:** job hunting in Indonesia still feels like 2010 — 200 tabs, blind applications.
- **The system:** LinkedIn ingest (Apify) → LLM structures the profile → daily
  Celery crawl of Indeed/JobStreet → GPT-4o scores 0–100 with matching/gap skills.
- **The interesting engineering:** why structured output (Pydantic) over free-text;
  why 0–100 beats yes/no; the async pipeline (Celery + Redis).
- **The honest part:** the ethos — "don't sell to people who can't afford it,"
  garbage-in-garbage-out on profiles. (This builds trust, not just traffic.)
- **CTA:** try it free at cariinkerja.id + subscribe for the next build log.
- **Repurpose:** YouTube screen-share of the scoring pipeline; Threads teaser of one real 0–100 verdict.

### Post 2 (ID, "kamu") — "Bikin bot Telegram pencatat keuangan pakai Django + OpenAI Agents SDK"
- **Hook:** nyatet pengeluaran ribet kalau harus buka app. Gimana kalau cukup chat Telegram?
- **Yang dibangun:** python-telegram-bot → Django → multi-wallet → laporan PDF
  (WeasyPrint) → AI chat (OpenAI Agents SDK) + endpoint MCP.
- **Bagian menarik:** kenapa Telegram-first; struktur data wallet; auth MCP.
- **CTA:** coba ngaturduit.my.id + langganan newsletter buat update fitur.
- **Repurpose:** demo 30 detik di Threads/YouTube Shorts (pakai Claude-Powered Clipper).

## Wiring already in place

- Newsletter signup renders on the blog index + homepage (set
  `PUBLIC_NEWSLETTER_ACTION` to go live).
- Products page now spotlights the live product with a "Try it free" CTA — link
  posts straight to `/products` or the product URL.
- Add posts under `src/content/blog/` (EN and ID both generate from the flat
  collection; use `draft: true` while writing).
