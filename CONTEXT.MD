# Entersight Landing Page Context

This project is rebuilt from the Figma design:
https://www.figma.com/design/obT5dMPVcKKxq2nXA8EtJo/Entersight-Real--Copy---Copy-

## Brand Identity
- A light-themed B2B landing page (Vietnamese) for Entersight — an AI
  Marketing & Operation platform for SMEs.

## Design Tokens (from Figma → `src/app/globals.css`)
- `--ink`: #010205 (near-black text)
- `--lime`: #C4FF0B (accent / highlights)
- `--blue`: #5549DE (primary brand)
- `--purple`: #4A3AFF (primary purple)
- `--purple-200`: #E1DEFF
- `--lightgray`: #F4F4F4
- `--neutral-300`: #EFF0F6 (card borders)
- `--muted`: #8987A1
- `--white`: #FFFFFF
- `--bg`: #F5F6FF (page background)

## Typography
The Figma file uses **SVN-Gotham** (Bold) for headings and **Roboto** for body.
SVN-Gotham is a paid Vietnamese font not available on Google Fonts, so it is
substituted with **Montserrat** (the closest free geometric sans). Mapped via
`next/font/google` in `src/app/layout.tsx`:
- Headings: Montserrat → `--font-heading` → CSS `--font-head`
- Body: Roboto → `--font-body` → CSS `--font-body`

## Page Structure (`src/app/page.tsx`)
Dark canvas (`--night`) with light panels (`.light`) for rhythm, brand palette
(ink / lime / blue-purple / light gray). Headings are sentence case (`.h2`,
Montserrat) — all-caps Vietnamese with stacked accents reads poorly. Each
section opens with an `.eyebrow` line, not a numbered `[ 01 — … ]` label.
Copy is written in plain Vietnamese, in the customer's words; every number on
the page comes from a case study below it.

Story: problem → what we do → proof → how we work → contact.
1. `Navigation` — fixed, `mix-blend-mode: difference`; flat links on desktop,
   full-screen sheet on mobile
2. `Hero` — headline + sub + two CTAs; three real results (Oni, KYE, MỘT);
   client logos
3. `Problem` — four pain points as owners say them, each with the fix
4. `Solutions` (light) — four services, each linking to a case
   (`#case-<id>` opens that row), then the three products (ETStar, EnterLMS,
   MUSE Studio) at `#products`
5. `CaseStudies` — project rows with their key result; one opens to
   problem/solution/result, pointer-following preview on desktop
6. `Work` — LauLau Creative: a grid of covers linking to `/work/<slug>`
   (data in `work.ts`, images in `public/work/<slug>/`)
7. `Cases` — testimonials: photo beside the quote, client tabs
8. `Transformation` (light) — the four steps of working together
9. `Outro` — `Contact` (headline + form panel) and footer with the
   ENTER✱SIGHT wordmark

Motion is deliberately quiet: native scrolling (no smooth-scroll library, no
scroll-jacking or snap), one reveal (`.reveal` → `in` via `ScrollReveal`, an
18px rise staggered with `--d`), a CSS load-in on the hero, and hover states.
All of it is off under `prefers-reduced-motion`.

## Portfolio pages
`/work` lists every LauLau Creative project; `/work/<slug>` is a shareable,
prerendered page per project (slug from `work.ts`, OG image = first shot).
Both are in `src/app/sitemap.ts`.

## Outline type
Stroke-only display text uses `--font-outline`: a static, overlap-free
Montserrat ExtraBold (`src/app/fonts/montserrat-800-outline.woff2`). The
Google variable font keeps overlapping contours, which `-webkit-text-stroke`
draws as stray lines inside glyphs.

## Lead form
`Contact` posts to `/api/lead` (`src/app/api/lead/route.ts`), which validates
with `src/lib/lead.ts` and forwards to the Google Apps Script in
`scripts/lead-to-sheet.gs` (Sheet row + email). Needs `LEAD_WEBHOOK_URL` and
`LEAD_WEBHOOK_SECRET` on Vercel — see README.

Components use CSS Modules; shared utilities live in `globals.css`.
Assets exported from Figma are in `public/figma/`.

## Build Note
`next.config.ts` sets `experimental.turbopackUseSystemTlsCerts: true` so
`next/font` can fetch Google Fonts in restricted/CI network environments.

## Contact Information
- **Facebook**: https://www.facebook.com/entersight
- **Mail**: info@entersight-tech.com
- **SĐT**: Lã Thị Kiều Oanh — Founder — 0941233481

## Fashion Studio product page
`/fashion-studio` (`src/app/fashion-studio/`) is a standalone light page for the
AI Fashion Studio product, styled after an Awesomic-like zinc system (tokens
scoped to `.page` in `fashion-studio.module.css`; Be Vietnam Pro as the single
font since DM Sans has no Vietnamese subset). Numbers come from the KYE Agency
usage report (audit log, 11 Apr – 14 Oct 2026); screenshots and photos are in
`public/fashion-studio/`. The demo form reuses `/api/lead`.
Section 02 "Lookbook từ ảnh thật" shows two real MUSE runs (inputs → output),
cropped from the MUSE lookbook social posts (21/10/2026) into
`public/fashion-studio/real/` with the burned-in labels cut off; copy and alt
text in `lookbooks` (`data.ts`).

## ETStar product page
`/etstar` (`src/app/etstar/`) is the landing for ETStar, Entersight's
Google Maps review product (QR + AI review collection, multilingual replies,
GBP optimisation). It uses its own scoped "billboard" style on brand colours —
white canvas, Work Sans (loaded only on that route), giant 900-weight words in
lime / lavender (`--purple-200`) as section markers, purple outlines for
interactive bits, no shadows or filled buttons. Copy/prices live in `data.ts`.
Product shots in `public/etstar/` are AI-generated (Figma AI) on white.
Its form posts to `/api/lead` with the message prefixed `[ETStar]`.
Motion (all off under `prefers-reduced-motion`): the hero plays on load in
pure CSS (billboard letters rise, copy steps up, seal spins); `MapsList.tsx`
counts "your store" from 3.9★/21 to 4.8★/128 and FLIPs it to the top;
`Motion.tsx` reveals `[data-reveal]` on scroll, counts up `[data-count]`
figures and drifts the billboard words (`[data-drift]`) sideways.
Old URLs `/review365` and `/enterreview` redirect to `/etstar`.
Linked from the home page by a strip under the Solutions bento, the nav and
the sitemap.

## EnterLMS product page
`/lms` (`src/app/lms/`) is the landing for EnterLMS, Entersight's AI sales
onboarding LMS (app at lms.entersight-tech.com). Built on the Entersight design
system: light-gray ground, white cards, majorelle-blue and night panels, lime
CTAs, boxy ↗ buttons, `[ 01 — … ]` labels. Story: outcome hero ("sale mới
vững tay trước khi gặp khách") → product facts → problem/answer → 4 steps,
each with a screen mock → roleplay → manager analytics → feature tiles →
FAQ → demo form. Copy lives in `data.ts` and only claims what the LMS does
in code; every mock (`Mocks.tsx`, `Roleplay.tsx`) is labelled sample data.
Logo, favicon and share image are generated: `public/lms/enterlms-*.svg`
(bubble + three rising bars, outlined Montserrat Bold wordmark), `icon.svg`,
`apple-icon.png`, `opengraph-image.jpg`.
Motion (off under `prefers-reduced-motion`): an inline script sets
`html[data-lmsjs]` before paint; display words rise out of masks
(`Display.tsx`); the hero cards pop in and the lesson flips to approved
(pure CSS); `Roleplay.tsx` plays the chat when in view, with a replay button;
`Motion.tsx` reveals `[data-reveal]`, counts up `[data-count]`, fills the lime
rail along the steps (`[data-track]`), turns the asterisks, drives the header
progress line, the hero pointer dot and the phone sticky CTA. The form posts
to `/api/lead` prefixed `[EnterLMS]`.
