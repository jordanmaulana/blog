# Kuliah Tamu ITS Teknologi Kedokteran: talk outline

**Theme:** Scalable Data Architecture, APIs, and Storage Strategies of Healthcare System

**When:** Senin, 26 Oktober 2026 · 15.00 · Auditorium FK-101, Gedung FKK ITS · 60 min slot

**Base deck:** `Being professional abroad.pdf` (Pitch). New slides live in `draft/slides.html`;
`node events/dosen_tamu_kedokteran/draft/build.mjs` merges them with the kept Pitch pages into
`presentation-draft.pdf`.

## The goal

> Bikin yang jalan dulu.
> Gedein pas udah kerasa sempit.

Two halves, one idea. **Building systems** proves both lines and gives a way to tell when
it's "sempit". **Building yourself** carries the first line only. Your n8n story is the hinge
between them. Every slide hands a question to the next one (the `→` line below). If a slide
doesn't, it doesn't belong.

Decided in the interview on 2026-10-01:

| Q | Decision |
|---|---|
| 1–3 | Tech + career, two equal halves, one shared idea: start small, don't overbuild |
| 4–5 | Thesis: "Bikin yang jalan dulu." / "Gedein pas udah kerasa sempit." |
| 6 | Tech evidence: only the productideagenerator timeout story (later moved to slide 8 notes) |
| 7 | "Sempit" is measured with the four golden signals |
| 7b | One slide per signal, Indicator + Remediation, textbook remedies from the SRE book (replaced the timeout-story slides) |
| 7c | Indicators are exact thresholds, cited published defaults (2026-10-02) |
| 8 | Healthcare = disclaimer + room questions, each tied to the thesis |
| 9 | Career has no "sempit" analog. It carries "jalan dulu" only |
| 10 | Hinge = your n8n tweet |
| 11 | Career keeps p.8, p.9, p.10, p.11, p.15 |
| 12 | Order of the tech half: room first (default, swappable) |
| 13 | Intro keeps p.2 (rewritten) and p.4 |
| 14 | Sections: 01 Introduction / 02 Building systems / 03 Building yourself |

## How to read this

| Tag | Meaning |
|---|---|
| **On slide** | Lines taken from the source as-is. Don't reword them on the slide. |
| **Source** | `file:line` in this repo, `deck p.N` = page of the Pitch PDF, `Q#` = interview answer |
| `→` | The question this slide hands to the next one |
| `[YOUR WORDS]` | Only you can write this line. Slide stays empty until you do |
| `[CONFIRM]` | Drafted in the interview, wording not approved yet. Badge on the slide until you do |
| ✅ | Fact checked against a source on 2026-10-01, link inline |

## Time budget

| Section | Slides | Min |
|---|---|---|
| 01 Introduction | 1–3 | 3 |
| 02 Building systems | 4–12 | 24 (room slides 5 + 12 take ~12) |
| Hinge | 13 | 2 |
| 03 Building yourself | 14–18 | 16 |
| QnA | 19 | 15 |
| **Total** | **19** | **60** |

## Deck changes

- **Reuse as is:** p.4 Tech Stacks, p.8 Visibility, p.9 Publish Yourself, p.10 How to start, p.11 Per-platform, p.15 Luck, p.16 QnA
- **New / rewritten (in `slides.html`):** 1 Title, 2 Contents, 4–13
- **Cut:** p.3 Profile, p.5 Database Tech, p.6 4 Money Leverage, p.7 Side income jobs, p.12 My strategy, p.13 Journey, p.14 It happened (its tweet survives as the slide 11 crop), p.17 Pitch ad

---

## 01 Introduction

### 1 · Title

**On slide:** Scalable Data Architecture, APIs, and Storage Strategies of Healthcare System · Kuliah Tamu · Teknologi Kedokteran ITS

**Source:** event poster

### 2 · Contents

**On slide:** 01 Introduction / 02 Building systems / 03 Building yourself

**Source:** Q14

### 3 · Tech Stacks (p.4, as is)

**→** Everything I build is on this stack. None of it is a hospital system.

---

## 02 Building systems

### 4 · Disclaimer

**On slide:** `[YOUR WORDS]` You've never built a hospital system.

**Source:** Q8

**→** So what can I tell you? How I'd start.

### 5 · Mulai dari mana?

**On slide:** `[CONFIRM]` "Disuruh bikin sistem klinik." / "Mulai dari mana?"

**Source:** Q12 default

**Notes:**
- Let the room overbuild out loud. Every answer bigger than "satu app, satu database" sets up slide 6.

**→** Here's my answer.

### 6 · Thesis

**On slide:** "Bikin yang jalan dulu." / "Gedein pas udah kerasa sempit."

**Source:** Q5

**→** "Kerasa sempit". How do you know?

### 7 · Gimana tau udah sempit?

**On slide:** four cards:
- **Latency** "The time it takes to service a request."
- **Traffic** "A measure of how much demand is being placed on your system"
- **Errors** "The rate of requests that fail"
- **Saturation** "How "full" your service is."

**Source:** ✅ [Google SRE book, Monitoring Distributed Systems, The Four Golden Signals](https://sre.google/sre-book/monitoring-distributed-systems/). Traffic and Errors have their trailing clause cut, not reworded.

**Notes:**
- Same page: "If you can only measure four metrics of your user-facing system, focus on these four."

**→** One by one: how do you see it, and what do you do when it goes red?

### 8 · Latency

**On slide:**
- Indicator: `≤ 0.8s` TTFB: good · `> 1.8s` TTFB: poor · `> 10s` "the limit for keeping the user's attention focused on the dialogue"
- Remediation: "It's usually wise to set a deadline." / "Serve lower-quality, cheaper-to-compute results to the user."

**Source:** ✅ fetched 2026-10-02: [web.dev TTFB](https://web.dev/articles/ttfb) (good ≤ 0.8s, needs improvement 0.8–1.8s, poor > 1.8s) · [NN/g Response Times: The 3 Important Limits](https://www.nngroup.com/articles/response-times-3-important-limits/) · [SRE book ch.22 Addressing Cascading Failures](https://sre.google/sre-book/addressing-cascading-failures/) (remediation, fetched 2026-10-01, quotes verbatim)

**Notes:**
- TTFB "measures the time between starting navigating to a page and when the first byte of a response begins to arrive", so DNS and connection time are inside it. Your server time has to sit well under 1.8s.
- Your "2s per request" example is just past web.dev's 1.8s "poor".
- NN/g's other two limits: 0.1s "the limit for having the user feel that the system is reacting instantaneously", 1.0s "the limit for the user's flow of thought to stay uninterrupted, even though the user will notice the delay".
- Old ch.6 indicator lines: "It's important to distinguish between the latency of successful requests and the latency of failed requests." / "collect request counts bucketed by latencies (suitable for rendering a histogram), rather than actual latencies."
- Optional live example (yours, `src/content/products/productideagenerator.mdx:76`): Gunicorn's timeout is 60s, the LLM calls allow 300–900s, so "Long work never runs in-request." Triggers hand off to a background thread. Still "There is no job table." (`:75`)

**→** Slow is one thing. What if there's just too much?

### 9 · Traffic

**On slide:**
- Indicator: `> ½` of load-tested max req/s · "can your service properly handle double the traffic"
- Remediation: "limiting the volume of requests by criteria such as IP address" / "Good capacity planning can reduce the probability that a cascading failure will occur."

**Source:** ✅ [SRE book ch.6 Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/) (Saturation section) · [SRE book ch.22 Addressing Cascading Failures](https://sre.google/sre-book/addressing-cascading-failures/) (remediation, fetched 2026-10-01, quotes verbatim)

**Notes:**
- The ½ is derived, not published: if traffic is past half of what the load test survived, you can no longer "handle double the traffic". Say it as your reading of the SRE line.
- Full ch.6 sentence: "can your service properly handle double the traffic, handle only 10% more traffic, or handle even less traffic than it currently receives?"
- Old ch.6 indicator line: "For a web service, this measurement is usually HTTP requests per second"
- The IP line comes from ch.22's rate-limiting list: "At the reverse proxies, by limiting the volume of requests by criteria such as IP address to mitigate attempted denial-of-service attacks and abusive clients."

**→** Too much load starts to fail. How do you count failures?

### 10 · Errors

**On slide:**
- Indicator: `99.9%` SLO → error budget 0.1% · `> 1.44%` errors for 1 hour → page (burn rate 14.4) · `> 0.1%` errors for 3 days → ticket (burn rate 1)
- Remediation: "Always use randomized exponential backoff when scheduling retries." / "Limit retries per request. Don't retry a given request indefinitely."

**Source:** ✅ fetched 2026-10-02: [SRE workbook, Alerting on SLOs, Table 5-8](https://sre.google/workbook/alerting-on-slos/) (99.9% over 30 days; page at burn 14.4 = 2% budget in 1h, page at burn 6 = 5% in 6h, ticket at burn 1 = 10% in 3 days) · [SRE book ch.22 Addressing Cascading Failures](https://sre.google/sre-book/addressing-cascading-failures/) (remediation, fetched 2026-10-01, quotes verbatim)

**Notes:**
- 1.44% is derived: burn rate 14.4 × the 0.1% budget. The workbook: "With a 99.9% SLO, a sustained 0.1% error rate equals a burn rate of 1."
- Each alert also needs its short window to agree (5 min for the 1h page, 6h for the 3-day ticket), so a blip that already stopped doesn't page anyone.
- Old ch.6 indicator lines: "either explicitly (e.g., HTTP 500s), implicitly (for example, an HTTP 200 success response, but coupled with the wrong content), or by policy" / "If you committed to one-second response times, any request over one second is an error"
- Ch.6: "catching HTTP 500s at your load balancer can do a decent job of catching all completely failed requests, while only end-to-end system tests can detect that you're serving the wrong content."
- Ch.22 also: "Avoid amplifying retries by issuing retries at multiple levels."

**→** Errors and slowness are symptoms. How full is the thing underneath?

### 11 · Saturation

**On slide:**
- Indicator: `< 5%` disk free → warning · `< 3%` disk free → critical · `≤ 4h` until disk full (predicted) → critical · `> 90%` CPU / memory
- Remediation: "Load shedding drops some proportion of load by dropping traffic as the server approaches overload." / "adding tasks can be the most expedient way to recover from the outage."

**Source:** ✅ fetched 2026-10-02: [Prometheus node-exporter mixin defaults](https://github.com/prometheus/node_exporter/blob/master/docs/node-mixin/config.libsonnet) (fsSpaceAvailable 5/3%, fill-up prediction 24h warning / 4h critical, CPU and memory high 90%) · [SRE book ch.22 Addressing Cascading Failures](https://sre.google/sre-book/addressing-cascading-failures/) (remediation, fetched 2026-10-01, quotes verbatim)

**Notes:**
- The 4h matches SRE ch.6's own example: "It looks like your database will fill its hard drive in 4 hours."
- Old ch.6 indicator lines: "Latency increases are often a leading indicator of saturation." / "many systems degrade in performance before they achieve 100% utilization, so having a utilization target is essential."
- Ch.6: "Measuring your 99th percentile response time over some small window (e.g., one minute) can give a very early signal of saturation."
- The "adding tasks" line opens with "If your system is running at degraded capacity and you have idle resources,".

**→** That's the textbook. In a klinik?

### 12 · Di klinik, apa yang sempit duluan?

**On slide:** `[CONFIRM]` title + the same four signals as slides 7–11, each with an empty box for the room's answers

**Source:** Q8

**Notes:** fallback if the room goes quiet:
- ✅ RME (rekam medis elektronik) has to be interoperable with SATUSEHAT so a patient's history is readable when they move between fasyankes. [dinkes.kedirikab.go.id](https://dinkes.kedirikab.go.id/rekam-medis-elektronik-harus-interoperabel-dengan-satu-sehat-perspektif-pmk-24-1922/)
- ✅ SATUSEHAT is Kemenkes' national health data interoperability platform; integration standard is HL7 FHIR R4. [SATUSEHAT FHIR R4 Implementation Guide](https://simplifier.net/guide/satusehat-fhir-r4-implementation-guide?version=current)
- ✅ Permenkes 24/2022 requires every faskes (incl. klinik, tempat praktik mandiri) to run RME by 31 Dec 2023, interoperable with SATUSEHAT. [Permenkes 24/2022 (PDF, kemkes.go.id)](https://keslan.kemkes.go.id/unduhan/fileunduhan_1662611251_882318.pdf)
- ✅ Diagnosis goes in the FHIR `Condition` resource, coded with ICD-10 (2010). One `Condition` = one code. [SATUSEHAT docs: Condition](https://satusehat.kemkes.go.id/platform/docs/id/fhir/resources/condition/) · [Standar Terminologi](https://satusehat.kemkes.go.id/platform/docs/id/terminology/standar-terminologi/)

**→** That's systems. What about you?

---

## Hinge

### 13 · n8n

**On slide:** "23 Juni aku frustrasi nyoba n8n." / "18 Agustus aku dapat full time job n8n." + crop of the tweet

**Source:** deck p.14 (tweet), Q10

**→** How did a frustrated tweet turn into a job?

---

## 03 Building yourself

### 14 · Challenge: Visibility (p.8, as is)

**→** Applying alone = isolated audience. Fix?

### 15 · Publish Yourself (p.9, as is)

**→** OK, but how do I start?

### 16 · How to start (p.10, as is)

**Notes:** Callback to slide 6. "Effortless first" is "bikin yang jalan dulu", now about you. "Kelamaan mikir :v" is slide 5's overbuilding.

**→** Where do I post?

### 17 · Per-platform (p.11, as is)

**→** Does it always work?

### 18 · Luck = Preparation x Opportunity (p.15, as is)

---

## Close

### 19 · Now is your turn! QnA (p.16, as is)
