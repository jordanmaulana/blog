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
      "mulai dari …"). "Book a call" is **live** — `PUBLIC_BOOKING_URL` set (Calendly),
      button renders on both locales. "Pay deposit" deferred (needs a payment link).
- [x] **List 10 warm contacts** — ex-colleagues, founders, dev/indie communities who
      plausibly need AI automation or an MVP. *(~30 min)*
      **The 10:**
      1. Haris — DM'd
      2. Dennis — DM'd (silent)
      3. Ivan — quote sent → DECLINED (needs ~20M-value system on ~4M budget; won't
         underprice). Closed.
      4. Andik — not a fit; dropped
      5. Dwiki — not a fit; dropped
      6. Brian — **ex-CTO (Adgorithmics), public LinkedIn recommendation now on `/work`.**
         Social proof, not a lead.
      7. Uwais · 8. Andan · 9. Zumy · 10. Sidik — bench (Week-2 DM batch)
- [x] **DM warm contacts** a short, specific, genuine offer — one line on what you'd
      build *for them*. No blast. **Closed at 3/5 (2026-08-07)** — lever spent by
      decision, not abandoned. *(~1 hr)*
  - [x] Haris — DM'd
  - [x] Dennis — DM'd (silent)
  - [x] Ivan — quote sent → declined (budget mismatch)
  - [x] ~~Andik~~ / ~~Dwiki~~ — dropped (not a fit). Warm lever ~spent — don't force 5/5.
  - [x] *(optional)* 1 bench contact (Brian / Andan / Zumy) — skipped, no genuine fit

## Week 2 — First content asset  · COMPOUNDING

Top-of-funnel fuel. One post drives SEO discovery → newsletter capture → Cariinkerja.

- [ ] **Publish Post 1** (EN — *"How I built an AI that scores every job posting
      against your LinkedIn"*). Outline ready in
      [`content-engine.md`](./content-engine.md). Batch on the weekend. *(~2-3 hrs)*
  - [ ] **[→ Claude]** draft from the outline
  - [ ] Edit the draft to your voice
  - [ ] Confirm the newsletter CTA + Cariinkerja link fire on the published post
        (`PUBLIC_NEWSLETTER_ACTION` is set — Buttondown)
  - [ ] Publish (drop `draft: true`)
- [ ] Post a **teaser on Threads/LinkedIn** linking back to the post. *(~20 min)*
- [x] **DM remaining bench contacts** — **skipped by decision**, same call as Week 1:
      warm lever ~spent, no genuine fit on the bench. Only Sidik survives (see below).

## Week 3 — Cariinkerja + audience  · CASH + COMPOUNDING

Your one live + paying SaaS is the real scalable earner. Cheapest growth = the users
you already have.

- [x] Testimonial/referral asks → folded into **Next levers → Grow Cariinkerja**
      (see below) — same "talk to users" action, run it once there. Not a task here.
- [x] Add one strong testimonial to the Cariinkerja product page / `/work`.
      **Done + deployed 2026-08-07** — 2 user quotes live on cariinkerja.id; 2 quotes
      (Brian + Venanda) live on `/work` + `/id/work` via `822b4ae`, pushed, rendering on
      jordanmaulana.space.
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
  - [ ] **Talk to 5 users** — the needle-mover. **2 of 5 done (2026-08-07)**; their
        testimonials are live on cariinkerja.id. 3 conversations left. *(~2 hrs)*
    - [x] Pick 3 paying users + 2 who signed up free and stalled
    - [ ] Reach out (WA / short voice call) — **2 done, 3 to go**
    - [x] Capture the real **hook** + real **objection** in their own words —
          **2 of 5 captured + recorded (2026-08-07)**. Verbatim, unedited:

      > **Nurlianto Aldi** — "Secara overall, cariinkerja.id cukup ngebantu, Mas.
      > Terutama dalam hal mempersingkat waktu dalam pencarian kerja yang cocok. Apalagi
      > udah ada feedback kecocokan antara loker dan CV yang kita punya. Fitur filter nya
      > juga ngebantu, saya biasa pake filter yang dimana skor CV saya berada di atas 75."
      >
      > *hook:* "mempersingkat waktu dalam pencarian kerja yang cocok" + "feedback
      > kecocokan antara loker dan CV". *objection:* none raised.

      > **Rama Widi** — "Iyo sangat membantu jo. Cmn oleh interview2 iki sek syedih. Cmn
      > balasan email tok maksimal. Terus wes gak ono lanjutan e wkwkwkwk"
      >
      > *hook:* "sangat membantu". *objection:* "balasan email tok maksimal. Terus wes
      > gak ono lanjutan e" — the product gets him replies, then the trail dies. His pain
      > is downstream of search.

      **Read across both:** the hook is **time saved + match score** (Aldi filters to
      only show CV scores above 75 — the score *is* the product). The objection is
      **outcome, not discovery** —
      Rama finds and applies fine; nothing carries him past the email reply.
  - [ ] Founder **LinkedIn content ~2×/wk** (Bahasa) — a real 0-100 verdict / skill-gap
        teardown / "how to read a JD". Soft CTA ≤1 in 3.
  - [ ] **Seed value** in 1-2 ID loker groups — help-first, link second, no blast
  - [ ] **Referral + testimonial asks** to payers — close each user chat with the 2-line ask
  - [ ] Offer **Sidik-academy partnership** — free tier + Open-to-Work discount for his cohort
- [ ] **Venanda referral + testimonial** — she's happy + paying; highest-trust growth.
  - [x] Ask for a 2-line quote — **given + published 2026-08-07**
  - [ ] Ask "know anyone who needs something similar?"
  - [x] **[→ Claude]** proof section **shipped + live** (`822b4ae`) on `/work` +
        `/id/work` with **2 quotes**: Brian de Heus (CTO, Adgorithmics — public LinkedIn
        rec, June 2025) and Venanda Putri (Business Owner). Both verbatim, same text on
        both locales.
- [ ] **Sidik** — only warm lead left; draft a concrete offer **only if** it fits the
      Venanda shape (simple tool / paid class), not a complex build.

**[→ Claude, on demand]** in-repo builds — hand me the material and I ship:
- ~~`/work` **proof section**~~ — **shipped `822b4ae`, live** on both locales with Brian +
  Venanda. Add more quotes by appending to `src/data/testimonials.ts`; the section hides
  itself when the array is empty.
- **Post 1 / Post 2** drafts (outlines in [`content-engine.md`](./content-engine.md)).
- ~~Wire **`PUBLIC_BOOKING_URL`**~~ — set; "Book a call" is live on `/work` (Calendly).

---

## Weekly tracker (fill it in)

| Week | Money landed | Advisory replies / calls | Newsletter subs | Cariinkerja signups | Posts published |
|------|--------------|--------------------------|-----------------|---------------------|-----------------|
| W1 (Jul 4-10)  | Venanda — 200k IDR/mo (storage mgr app) |  |  |  | 0 blog |
| W2 (Jul 11-17) | — | — | — | — | 0 blog |
| W3 (Jul 18-24) | — | — | — | — | 0 blog |
| W4 (Jul 25-31) | — | — | — | — | 0 blog |
| Aug 4-7 (post-window) | — | — | — | — | 0 blog · carousel generator + proof section (live) |
| Aug 8-30 | — | — | — | — | **3 blog** (scam-ai-trainer 8/8 · wealth 8/19 · bertahan-dalam-karir 8/27) · 26 carousel slides |

### Day-34 status (2026-08-07) — window closed Aug 3

- **Cash:** 1 deal, Venanda 200k IDR/mo. Warm lever spent as predicted.
- **Distribution:** running, but **not on owned surfaces** — many Instagram + Threads posts
  published; blog is still at 2 posts, newest `pubDate` 2026-06-17. Newsletter never sent.
  The gap is the owned funnel (blog → newsletter → product), not reach.
- **Users:** 2 of 5 Cariinkerja conversations done, quotes live on cariinkerja.id.
- **Proof:** `/work` + `/id/work` proof section **live** with 2 quotes (Brian + Venanda) —
  shipped `822b4ae`, pushed, verified rendering on jordanmaulana.space.
- **Code shipped since Aug 4:** `d93f796` carousel generator + `822b4ae` proof section.
  Distribution tooling and social proof — both real, neither is owned-funnel *content*.
- **The gap moved:** it's no longer "code sitting uncommitted", it's **nothing written**.
  0 new posts, newsletter never sent. Every piece of plumbing the funnel needs is now
  live and unused.
- **Next:** Post 1
  (outline in [`content-engine.md`](./content-engine.md)). Repurpose the IG/Threads posts
  that already landed well — don't write from scratch.

### Day-57 status (2026-08-30)

- **Writing gap CLOSED.** Blog went 2 → 5 posts. The Aug-7 note ("nothing written")
  no longer holds — but none of the 3 are the outline posts. W2/W4 "Publish Post 1 /
  Post 2" is **superseded**: he wrote his own material instead (`scam-ai-trainer`,
  `wealth`, `bertahan-dalam-karir`), all ID, all personal-voice.
- **The gap moved again — posts were dead ends.** `grep` over `src/content/blog/*.mdx`
  found **zero** product or newsletter mentions, and neither `src/pages/blog/[slug].astro`
  nor `src/pages/id/blog/[slug].astro` rendered any CTA — `NewsletterSignup` mounted
  only on the homepage and the blog *index*. Every post published since Jul 4 sent its
  traffic nowhere. Content-engine rule #2 was never wired.
- **FIXED today.** Both `[slug].astro` templates now render, below the article: an
  optional product card + the newsletter box. Opt-in per post via a new `funnelsTo`
  frontmatter field (a `products` collection id) on the `blog` schema in
  `src/content.config.ts`; name/tagline/url come from the products entry, button copy
  reuses the existing `products.try` key — no duplicated copy, no new i18n keys.
  Set: `wealth` → ngaturduit · `scam-ai-trainer` + `bertahan-dalam-karir` → cariinkerja.
  `tauhid` and `tutorial-resign` have none (tutorial-resign → cariinkerja is a
  plausible add, Jordan's call). Verified in `dist/`: product link + Buttondown form
  on both locales; `tauhid` gets the newsletter only.
- **Still untouched since Aug 7:** newsletter never sent (0 issues, list collecting
  since Jul 4) · Umami review never run · 3 of 5 Cariinkerja user calls · Venanda
  referral ask · Sidik offer.
- **Next, in order:** (1) send newsletter issue 1 — no new writing, intro + the 3 posts
  + cariinkerja; (2) Umami review, there are finally 3 posts of data; (3) the 3
  remaining user calls.
