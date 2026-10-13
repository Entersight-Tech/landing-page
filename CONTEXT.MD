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
SVZ-inspired editorial layout on a dark canvas (`--night`), keeping the brand
palette (ink / lime / blue-purple / light gray) and fonts (Montserrat display,
Roboto body + italic "mini" words). Shared pieces live in globals.css:
`.display`, `.mini`, `.label` ([ 03 — GIẢI PHÁP ]), `.btn` / `.btn--solid`.

1. `Navigation` — fixed, `mix-blend-mode: difference` (white on dark, black on
   light panels); grouped links on desktop, full-screen sheet on mobile
2. `Hero` — sticky "curtain" hero: centred display headline, brand asterisk
   shapes, pointer-following lime dot, service list
3. `Partners` — light panel that slides over the hero: "CÔNG NGHỆ ✱ SÁNG TẠO"
   statement settling on scroll + partner logo marquee
4. `Problem` — pinned 3-screen stage: each scroll step reveals two pain points
   and burns their letters off the giant "NGÂN SÁCH" (the budget evaporating)
5. `Distill` — pinned manifesto; keywords fly into a list linking `#sol-N`
6. `Solutions` — light "hub" panel with a bento of the 5 products (+ CTA tile)
7. `Transformation` — 4 phases as a staircase next to a sticky heading
8. `CaseStudies` — project index rows; one opens to problem/solution/result,
   pointer-following preview on desktop
9. `Work` — LauLau Creative portfolio (data in `work.ts`, images in
   `public/work/<slug>/`): an index screen, then one screen per project whose
   tone tints the section; "Xem dự án" links to the project's own page
10. `Results` — pinned headline while the 4 stat cards are dealt on scroll
11. `Cases` — testimonials: giant marquee behind the speaker photo + switcher
12. `Values` — purple block, EN / TER / SIGHT value stack
13. `Outro` — `Contact` (headline + form panel) and footer with the giant
    ENTER✱SIGHT wordmark

Scrolling (`Motion.tsx`): Lenis smooth scroll; on desktop (fine pointer,
≥900px) each wheel gesture pages exactly one screen — to the next
`main section` / `[data-page]` / `footer` top, or one viewport further inside
a taller section (`data-steps` pins exact positions for scroll-driven
stages). On touch the same stops become CSS scroll-snap points
(`html[data-snap]`, paused while a form field has focus and during anchor
jumps), so a swipe settles on the next screen. Once a section's own label has
scrolled away, `Navigation` shows it as a chip under the logo with progress.

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
