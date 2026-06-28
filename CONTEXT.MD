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
1. `Navigation` — sticky header
2. `Hero` — "SỐ HOÁ QUY TRÌNH MARKETING ĐÚNG ĐÍCH"
3. `Values` — E/T/S core values (Evolutionary / Tailor-made / Sincere)
4. `Problem` — Figma SCREEN 3 (node 526:1806): a dark indigo band with the
   "Entersight" wordmark watermark, 4 frosted-glass pain-point cards
   ("NGÂN SÁCH MARKETING ... BỐC HƠI?"), and the integrated CTA headline
   ("TIẾP THỊ THÔNG MINH — VẬN HÀNH TINH GỌN") + glass button. The former
   standalone `CtaBanner` was merged into this section.
5. `Solutions` — "MỘT ĐIỂM CHẠM — MỌI GIẢI PHÁP" (ETS AI Operation + cards)
6. `Cases` — Oni Homestay & KYE Agency case studies
7. `Partners` — partner logo marquee
8. `Contact` — stats + lead-capture form ("SẴN SÀNG BỨT PHÁ")
9. `Footer`

Components use CSS Modules; shared utilities live in `globals.css`.
Assets exported from Figma are in `public/figma/`.

## Build Note
`next.config.ts` sets `experimental.turbopackUseSystemTlsCerts: true` so
`next/font` can fetch Google Fonts in restricted/CI network environments.

## Contact Information
- **Facebook**: https://www.facebook.com/entersight
- **Mail**: info@entersight-tech.com
- **SĐT**: Lã Thị Kiều Oanh — Founder — 0941233481
