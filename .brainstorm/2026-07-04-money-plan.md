# Money Plan — 30-Day Action Checklist (2026-07-04)

> **Why this doc exists:** the funnel plumbing is done. All 6 levers are live +
> verified on `jordanmaulana.space` (Buttondown newsletter, Umami, Saweria tip,
> Calendly booking, `/work` advisory, Cariinkerja spotlight). See the prior status
> doc: [`2026-07-03-money-plan.md`](./2026-07-03-money-plan.md). The gap now is
> **human execution + demand**, not code — 0 of 6 planned posts are written.
>
> This is **not** a build plan. It's a **30-day checklist of what Jordan does as a
> person**: decide, write, sell, distribute. The few code bits are marked
> **[→ Claude]** — pick the numbers/copy, hand the build off, don't burn hours on it.

## Ground rules

- **Time budget: ~3-5 hrs/week.** Lean by design. Each week has **exactly one bolded
  needle-mover** — do that first. Everything else is bonus if time remains. Don't
  guilt-trip the bonus.
- **Balanced:** alternate a **cash** action ↔ a **compounding** deposit each week.
- **Ethos (from Cariinkerja):** genuine + specific, help first. No blasts, no dark
  patterns. One real sentence beats ten templated DMs.
- **Track weekly** (table at bottom): money landed · advisory replies/calls ·
  newsletter subs · Cariinkerja signups · posts published.

---

## Week 1 — Make advisory *sellable* + first outreach  · CASH

Fastest real cash. Highest $/hr, contract-cleared, needs zero traffic — you go to
the demand instead of waiting for it.

> **✅ FIRST PAID DEAL (2026-07-14): Venanda** — asked for a storage-manager app;
> built + delivered; charging **200k IDR/mo recurring**. Landed via a warm friend
> (not on the listed 10). Channel = custom micro-app + monthly maintenance fee, not
> the $600 advisory audit.
>
> **✗ Uwais — DROPPED.** His social-media auto-reply app needs RAG; build effort ≫ the
> 80K trial. Same anti-pattern as Ivan: complex/AI-heavy work for little money — refused.
>
> **Filter (from Ivan + Uwais drops):** take **simple-tool + fair-recurring** only.
> Refuse complex / AI-heavy-for-cheap on sight. Venanda (the win) is the shape to repeat.

- [x] **Decide fixed prices** for the 3 `/work` offers — AI Automation Audit / MVP
      Sprint / Arch & Code Review. Write the numbers down (a range is fine). *(~30 min)*
      **Decided (USD, "from"): Audit $600 · MVP Sprint $3,500 · Arch/Code Review $500**a
      — accessible tier (low anchors to land first sales; raise after testimonials).
      Audit = cheap wedge → sprint; Review = trust-builder + upsell.
- [x] Add prices + a clear **"Book a call / pay deposit"** action to `/work`.
      **[→ Claude]** — you only pick numbers + approve the page.
      Prices live on both `/work` + `/id/work` ("from $600 / $3,500 / $500",
      "mulai dari …"). "Book a call" button already wired — set `PUBLIC_BOOKING_URL`
      (Calendly) env to activate it. "Pay deposit" deferred (needs a payment link).
- [x] **List 10 warm contacts** — ex-colleagues, founders, dev/indie communities who
      plausibly need AI automation or an MVP. *(~30 min)*
      **The 10:**
      1. Haris — DM'd
      2. Dennis — DM'd (silent)
      3. Ivan — quote sent → DECLINED (needs ~20M-value system on ~4M budget; won't
         underprice). Closed.
      4. Andik — not a fit; dropped
      5. Dwiki — not a fit; dropped
      6. Brian · 7. Uwais · 8. Andan · 9. Zumy · 10. Sidik — bench (Week-2 DM batch)
- [ ] **DM 5 warm contacts** a short, specific, genuine offer — one line on what you'd
      build *for them*. No blast. *(~1 hr)*
  - [x] Haris — DM'd
  - [x] Dennis — DM'd (silent)
  - [x] Ivan — quote sent → declined (budget mismatch)
  - [ ] ~~Andik~~ / ~~Dwiki~~ — dropped (not a fit). Warm lever ~spent — don't force 5/5.
  - [ ] *(optional)* 1 bench contact (Brian / Andan / Zumy) **only if** it genuinely fits

## Week 2 — First content asset  · COMPOUNDING

Top-of-funnel fuel. One post drives SEO discovery → newsletter capture → Cariinkerja.

- [ ] **Publish Post 1** (EN — *"How I built an AI that scores every job posting
      against your LinkedIn"*). Outline ready in
      [`content-engine.md`](./content-engine.md). Batch on the weekend. *(~2-3 hrs)*
  - [ ] **[→ Claude]** draft from the outline
  - [ ] Edit the draft to your voice
  - [ ] Confirm newsletter CTA + Cariinkerja link fire (set `PUBLIC_NEWSLETTER_ACTION` if dead)
  - [ ] Publish (drop `draft: true`)
- [ ] Post a **teaser on Threads/LinkedIn** linking back to the post. *(~20 min)*
- [ ] **DM remaining bench contacts** — SKIP unless one genuinely fits (pivot: warm lever
      ~spent). *(~45 min)*

## Week 3 — Cariinkerja + audience  · CASH + COMPOUNDING

Your one live + paying SaaS is the real scalable earner. Cheapest growth = the users
you already have.

- [ ] Testimonial/referral asks → folded into **Next levers → Grow Cariinkerja**
      (see below) — same "talk to users" action, run it once there.
- [ ] Add one strong testimonial to the Cariinkerja product page / `/work`.
      **[→ Claude]** (needs the quotes first)
- [ ] **One acquisition action for Cariinkerja** — help first, link second. *(~1 hr)*
  - [ ] Pick 1-2 ID job-seeker communities (loker TG / FB group / Threads / Reddit)
  - [ ] Answer one real *"gimana cara..."* question with genuine value
  - [ ] Drop the link only where it genuinely fits — no blast
- [ ] Send your **first newsletter issue** — the list only compounds if you use it.
      *(~45 min)*
  - [ ] Write it (link Post 1 + Cariinkerja)
  - [ ] Send to whoever's subscribed (even if it's 3 people)

## Week 4 — Second asset + review  · COMPOUNDING + OPTIMIZE

- [ ] **Publish Post 2** (ID — *"Bikin bot Telegram pencatat keuangan pakai Django +
      OpenAI Agents SDK"*). Outline ready in
      [`content-engine.md`](./content-engine.md). *(~2-3 hrs)*
  - [ ] **[→ Claude]** draft from the outline
  - [ ] Edit the draft to your voice
  - [ ] Confirm newsletter CTA + product link fire
  - [ ] Publish (drop `draft: true`)
- [ ] Teaser / short on Threads. *(~20 min)*
- [ ] **Review Umami** *(~30 min)*
  - [ ] Find the top page/post + where signups came from
  - [ ] Note the winner in one line
- [ ] **Follow up** every advisory reply / warm-lead thread. Close what you can.
      *(variable)*

---

## After 30 days — pick the next lever (data-driven)

Double down on whatever channel actually converted. **Then** — and only where the
data shows real demand — consider the deferred *code* levers:

1. **Digital product, one-time sale** — Django + OpenAI Agents SDK boilerplate, or an
   "AI SaaS solo" playbook. Sells passively once you have an audience.
2. **Paywall a prototype** — turn threadshot / clipper / kasirkelontong into a paid
   micro-SaaS (checkout + gating). Recurring, but needs users first.
3. **GitHub Sponsors** on the open-source clipper + higher-payout dev-tool affiliates
   (hosting, AI tools) on the gear/blog surfaces. Low effort, small $.

Don't build any of these until Week 4's review says where the demand is.

---

## Next levers — grow what already pays

Warm-outreach lever is ~spent (10 contacts → 1 paying: Venanda). Ivan + Uwais dropped
(complex-for-cheap). Pivot from chasing new friend-apps to growing the earners. Priority:

- [ ] **Grow Cariinkerja** *(biggest + only scalable earner)* — full human-action
      playbook in [`cariinkerja-growth-human.md`](./cariinkerja-growth-human.md).
      (Product/code growth = separate repo.)
  - [ ] **Talk to 5 users** — the needle-mover, do this first. *(~2 hrs)*
    - [ ] Pick 3 paying users + 2 who signed up free and stalled
    - [ ] Reach out (WA / short voice call)
    - [ ] Capture the real **hook** + real **objection** in their own words
  - [ ] Founder **LinkedIn content ~2×/wk** (Bahasa) — a real 0-100 verdict / skill-gap
        teardown / "how to read a JD". Soft CTA ≤1 in 3.
  - [ ] **Seed value** in 1-2 ID loker groups — help-first, link second, no blast
  - [ ] **Referral + testimonial asks** to payers — close each user chat with the 2-line ask
  - [ ] Offer **Sidik-academy partnership** — free tier + Open-to-Work discount for his cohort
- [ ] **Venanda referral + testimonial** — she's happy + paying; highest-trust growth.
  - [ ] Ask for a 2-line quote
  - [ ] Ask "know anyone who needs something similar?"
  - [ ] **[→ Claude]** slot the quote into the `/work` proof section
- [ ] **Sidik** — only warm lead left; draft a concrete offer **only if** it fits the
      Venanda shape (simple tool / paid class), not a complex build.

**[→ Claude, on demand]** in-repo builds — hand me the material and I ship:
- `/work` **proof section** (needs the quotes above) — `Testimonial.astro` +
  `work.proof.*` i18n (en + id), slotted between the offers grid and the CTA.
- **Post 1 / Post 2** drafts (outlines in [`content-engine.md`](./content-engine.md)).
- Wire **`PUBLIC_BOOKING_URL`** (Calendly) → activates the dead "Book a call" button.

---

## Weekly tracker (fill it in)

| Week | Money landed | Advisory replies / calls | Newsletter subs | Cariinkerja signups | Posts published |
|------|--------------|--------------------------|-----------------|---------------------|-----------------|
| W1   | Venanda — 200k IDR/mo (storage mgr app) |                          |                 |                     |                 |
| W2   |              |                          |                 |                     |                 |
| W3   |              |                          |                 |                     |                 |
| W4   |              |                          |                 |                     |                 |
