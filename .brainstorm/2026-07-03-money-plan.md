# Money Plan — jordanmaulana.com

## Context

Jordan wants to generate more money. He has a full-time senior-engineer job
(AlphaX, Japan · remote), one **live, paying** product (Cariinkerja, Mayar
billing), four mostly-unmonetized products, and this Astro portfolio site.

Today the site is a **passive brochure**: 17 Shopee affiliate links (no
disclosure, near-zero revenue on low traffic), a used-goods board (~Rp 7.8M),
2 blog posts, and outbound product cards. Everything that actually charges money
lives on *other* domains. The site captures **nothing** — no email, no
analytics, no "work with me" path, no funnel.

**Goal:** convert the site from brochure → a funnel that captures attention and
routes it to money the owner actually controls (his own IP), without triggering
an employment conflict.

## Honest money math (invest where the money is, not where it feels busy)

| Lever | Realistic $ | Effort | Conflict risk |
|---|---|---|---|
| Shopee affiliate (current traffic) | ~$0–few/mo (cosmetic) | tiny | none |
| Newsletter / owned audience | $0 direct — but multiplies **everything** | low | none |
| SaaS funnel (Cariinkerja etc.) | recurring, already validated — the real scalable earner | med | none (own IP) |
| Productized advisory (async) | highest per-unit $/hr | low build | **check contract** |
| Digital product (guide/boilerplate) | one-time build, sells passively — needs audience first | high | none |

Through-line: **build the cheap capture + measurement layer first, then point it
at his own SaaS, then (optionally) advisory + a digital product.** Respect the
anti-predatory ethos (from Cariinkerja) — genuine value, no dark patterns.

## Recommended strategy — sequenced by ROI ÷ effort

### Phase 1 — Capture + measure (cheap, enables everything). DO FIRST.
- **Analytics.** Privacy-friendly analytics (Plausible or self-host Umami) in the
  shared layout, env-gated. Can't grow a funnel you can't see.
- **Email capture / newsletter.** Signup on homepage + blog + Work page. Static
  build → external form endpoint (Buttondown / Beehiiv / ConvertKit / own Django).
  The single most valuable missing asset — an owned audience.

### Phase 2 — Point capture at his own SaaS (grows the validated earner).
- **Product funnel upgrade.** `/products` → real funnel: sort/feature by `status`
  (live first), spotlight **Cariinkerja** with concrete value + "Try it free"
  CTA + proof; de-emphasize prototypes.
- **Cross-link** blog + homepage into the relevant product.

### Phase 3 — Productized advisory page (highest ticket — GATED).
- **"Work with me"** (`/work` + `/id/work`): senior AI/automation + full-stack.
  2–3 async productized offers + booking link + email CTA.
- ⚠️ **Do not ship until AlphaX contract is confirmed to permit outside work.**
  If not, skip; the rest of the plan is conflict-free.

### Phase 4 — Content engine (compounding top-of-funnel).
- Only 2 posts today. Build-in-public journeys → posts. EN for authority/SEO, ID
  for product audience; repurpose to Medium/YouTube/Threads; each post funnels to
  newsletter + a product. Deliver a starter calendar + 2 outlines.

### Phase 5 — Trust / housekeeping (small, but correct).
- **Affiliate disclosure** on `/gears` + `rel="sponsored"` in `GearCard.astro`.
- Optional **tip jar** (Trakteer/Saweria) in footer.

## Build tasks (reuse existing patterns)

Mirror every page under `src/pages/id/`; add UI strings to **both** locales in
`src/i18n/ui.ts`; use `getLangFromUrl` / `useTranslations` / `localizedPath`;
`trailingSlash: "never"`.

- **Analytics** — env-gated snippet in the shared layout head.
- **Newsletter** — `NewsletterSignup` component → configurable endpoint; embed on
  homepage, blog index, Work page.
- **Work page** — `src/pages/work.astro` (+ `id/`), reuse `src/data/about.ts`.
- **Product funnel** — edit products index (+ `id/`), sort by `status`, spotlight
  live; optional `featured` / `ctaLabel` schema fields (keep optional).
- **Affiliate** — disclosure copy + `rel="sponsored"` in `GearCard.astro`.
- **Tip jar (optional)** — `src/data/socials.ts` + footer.

## Open decisions (resolve at execution)

1. Email tool — Buttondown / Beehiiv / ConvertKit / own Django?
2. Analytics tool — Plausible (hosted) / Umami (self-host)?
3. Booking tool — Cal.com / Calendly / email only?
4. Advisory — does the AlphaX contract permit outside paid work? (Yes → build; No → skip Phase 3.)
5. Tip jar — include or skip?

## Verification

- `pnpm check` must pass.
- `pnpm dev` → walk each new/changed page in both `/` and `/id/`; confirm nav,
  CTAs, newsletter render/submit.
- Confirm analytics beacon fires + email endpoint records a test signup.
- `pnpm build && pnpm preview` — static build succeeds.
