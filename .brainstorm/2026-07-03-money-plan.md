# Money Plan — jordanmaulana.com

> **Status (2026-07-03):** the capture→funnel layer is **built and shipped**
> (commit `930aaac`). This doc is now a record of what landed, not a to-do.
> The site no longer *needs code* to start earning — it needs **env activation +
> content**. See [Remaining to earn](#remaining-to-earn).

## Context

Jordan wants to generate more money. He has a full-time senior-engineer job
(AlphaX, Japan · remote), one **live, paying** product (Cariinkerja, Mayar
billing), four mostly-unmonetized products, and this Astro portfolio site.

The site **was** a passive brochure: 17 Shopee affiliate links (no disclosure,
near-zero revenue), a used-goods board (~Rp 7.8M), 2 blog posts, outbound product
cards. It captured **nothing** — no email, no analytics, no "work with me" path.

**Goal:** convert brochure → funnel that captures attention and routes it to money
the owner controls (his own IP), without an employment conflict. The funnel
mechanics now exist; what's left is turning them on and feeding them traffic.

## Honest money math (invest where the money is, not where it feels busy)

| Lever | Realistic $ | Effort | Conflict risk |
|---|---|---|---|
| Shopee affiliate (current traffic) | ~$0–few/mo (cosmetic) | tiny | none |
| Newsletter / owned audience | $0 direct — but multiplies **everything** | low | none |
| SaaS funnel (Cariinkerja etc.) | recurring, already validated — the real scalable earner | med | none (own IP) |
| Productized advisory (async) | highest per-unit $/hr | low build | contract permits ✅ |
| Digital product (guide/boilerplate) | one-time build, sells passively — needs audience first | high | none |

Through-line: **cheap capture + measurement layer built, pointed at his own SaaS,
plus a conflict-cleared advisory page.** Respect the anti-predatory ethos (from
Cariinkerja) — genuine value, no dark patterns.

## What shipped — by phase

Every phase below landed in commit `930aaac`. Kept the original rationale; added
the file it lives in.

### Phase 1 — Capture + measure ✅ SHIPPED
- **Analytics** — `src/components/Analytics.astro`, wired into `BaseLayout.astro`.
  Env-gated, provider-agnostic (Umami self-host **or** Plausible hosted). Renders
  nothing until env set. *Can't grow a funnel you can't see.*
- **Newsletter capture** — `src/components/NewsletterSignup.astro`, provider-agnostic
  (POSTs an `email` field to any endpoint). Embedded on homepage + blog index in
  **both** locales. Form renders disabled until endpoint set. *The single most
  valuable asset — an owned audience.*

### Phase 2 — Point capture at his own SaaS ✅ SHIPPED
- **Product funnel** — `products/index.astro` (+ `id/`) spotlights the live product;
  `featured` field added to `content.config.ts`, Cariinkerja set `featured: true`
  with a "Try it free" CTA. Prototypes de-emphasized.

### Phase 3 — Productized advisory ✅ SHIPPED (was gated)
- **"Work with me"** — `src/pages/work.astro` (+ `id/`): 3 async productized offers
  + booking-link/mailto CTA, in nav (`Header.astro`).
- **Contract cleared:** AlphaX contract **permits outside paid work** → page is
  live. (Original gate resolved.)

### Phase 4 — Content engine 🟡 PLANNED, not yet written
- Strategy shipped as `.brainstorm/content-engine.md`: cadence (1 post / 2 weeks,
  alternate EN-authority ↔ ID-product), a 6-post starter calendar, and 2 ready
  outlines. **Posts themselves are not written yet** — this is the real remaining
  work (see below).

### Phase 5 — Trust / housekeeping ✅ SHIPPED
- **Affiliate** — `rel="sponsored"` in `GearCard.astro`; disclosure copy in
  `GearCategoryNav.astro`.
- **Tip jar** — env-driven footer link in `Footer.astro`.

## Resolved decisions

1. **Advisory / contract** — AlphaX permits outside paid work → `/work` shipped. ✅
2. **Tip jar** — approved, env-driven footer link. ✅
3. **Email / analytics / booking tools** — code is provider-agnostic, so the tool
   choice is deferred to env-set time (no code change to switch). Pick when
   activating:
   - Email: Buttondown / ConvertKit / Beehiiv / own Django
   - Analytics: Plausible (hosted) or Umami (self-host)
   - Booking: Cal.com / Calendly / email-only

## Remaining to earn

The build is done. Three things stand between here and revenue, in order:

1. **Set env vars to activate the levers** — everything is coded but renders/tracks
   *nothing* until these are set:
   - `PUBLIC_NEWSLETTER_ACTION` — email form endpoint (until set, signup is disabled)
   - `PUBLIC_UMAMI_SRC` + `PUBLIC_UMAMI_WEBSITE_ID` — **or** `PUBLIC_PLAUSIBLE_DOMAIN`
     (+ optional `PUBLIC_PLAUSIBLE_SRC`) — analytics
   - `PUBLIC_BOOKING_URL` — Cal.com/Calendly on `/work` (else email-only)
   - `PUBLIC_CONTACT_EMAIL` — defaults to `jordanmaulana26@gmail.com`
   - `PUBLIC_TIPJAR_URL` — Trakteer/Saweria/Ko-fi
2. **Write content** — the funnel drives nothing without top-of-funnel. Start with
   the 6-post calendar + 2 outlines in `content-engine.md`. Add posts under
   `src/content/blog/` (`draft: true` while writing).
3. **Point traffic at Cariinkerja** — the live + paying SaaS (Mayar billing) is the
   real scalable earner. Every post + the products spotlight should funnel there.

## Verification (unchanged — for any future edits)

- `pnpm check` must pass.
- `pnpm dev` → walk each new/changed page in both `/` and `/id/`; confirm nav,
  CTAs, newsletter render/submit.
- Confirm analytics beacon fires + email endpoint records a test signup (once env set).
- `pnpm build && pnpm preview` — static build succeeds.
