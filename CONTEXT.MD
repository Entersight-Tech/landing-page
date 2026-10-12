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
Ordered as a buyer's journey: promise → proof → problem → solution → how →
results → who we are → contact.
1. `Navigation` — fixed header; frosted pill on scroll (links/CTA sit above
   the glass layer), all-white logo, compact CTA kept on phones
2. `Hero` — "SỐ HOÁ QUY TRÌNH MARKETING ĐÚNG ĐÍCH", primary CTA + "Xem dự án
   thực tế" link to `#case-studies`
3. `Partners` — slim trust bar right under the hero (grayscale logo marquee)
4. `Problem` — dark "ngân sách đang bốc hơi" beat: draining budget bar +
   numbered pain points + CTA
5. `Distill` — pinned manifesto (built from the Solutions taglines); on
   scroll the filler words fade and the 5 product names fly into a list
   whose rows jump the carousel (`ets:solution` event)
6. `Solutions` — "MỘT ĐIỂM CHẠM — MỌI GIẢI PHÁP" carousel
7. `Transformation` — 01→04 roadmap (Tư vấn / Số hoá / Tối ưu hoá / Dữ liệu
   hoá) on a shared rail; vertical timeline below 980px
8. `CaseStudies` — project carousel (Oni, KYE, Một, Quà Tết Má Làm)
9. `Cases` — testimonial carousel (KYE, Oni, SMA)
10. `Values` — single dark section: title + quote + E/T/S cards
11. `Outro` — `Contact` (stats + lead form) and the gradient footer

All three carousels share `CarouselControls` (← dots →).

Motion system (SVZ-inspired, `Motion.tsx` + globals.css), skipped under
prefers-reduced-motion:
- Lenis smooth scroll; in-page anchors honour each section's scroll-margin-top
- curtain: `Hero` is sticky inside `.curtain` (Hero + Partners + Problem) and
  dims (`--cover`) as those panels slide over it
- `data-split` headings: words rise out of masks when `.reveal` gets `in`
- `.wipe` image containers clip open from the bottom on reveal
- every section opens with a `.tag` index label, e.g. `[03] Giải pháp`

`Scramble` gives text a "decoding" effect: `data-scramble` re-decodes on
hover/focus (nav, hero CTAs, footer links), `data-scramble="in"` decodes once
on scroll-in (section eyebrows). Both respect prefers-reduced-motion.

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
