# Entersight Landing Page Context

## Brand Identity
- **Logo**: `/context/logo` should be referenced in navigation and footer.
- **Brand Identity Reference**: `/context/brand-identity.png`
- **Reference HTML UI**: `/context/entersign-example.html`

## Colors (CSS Variables)
- `--blue`: #5549DE
- `--blue-dark`: #3f35c0
- `--blue-light`: rgba(85,73,222,0.12)
- `--lime`: #C4FF0B
- `--lime-dark`: #a8e000
- `--lightgray`: #F4F4F4
- `--charcoal`: #1F1F1F
- `--white`: #ffffff
- `--muted`: #888
- `--muted-dark`: #555

## Typography & CSS Variables
The project uses exact font variables mapped to `next/font/google` instances. 

**IMPORTANT RULE:** When applying these variables to CSS, you MUST scope them to the `body` selector and NOT `:root`, otherwise Next.js will fail to load the font properly and default to system wildcards.

- **Bebas Neue**: Used for large titles, headings, numbers, and the Logo. 
  - Weight: 400
  - Next.js Variable: `--font-bebas-neue`
  - CSS Map: `--font-bebas: var(--font-bebas-neue), sans-serif;`

- **Space Grotesk**: Used for paragraphs, structural UI body text, and generic sans-serif reads.
  - Weights: 300, 400, 500, 600, 700
  - Next.js Variable: `--font-space-grotesk`
  - CSS Map: `--font-space: var(--font-space-grotesk), sans-serif;`

- **DM Mono**: Used for uppercase section labels (like "VẤN ĐỀ", "GIẢI PHÁP"), contact labels, and specific monospaced aesthetic tags.
  - Display: ital 0, 1
  - Next.js Variable: `--font-dm-mono`
  - CSS Map: `--font-dm: var(--font-dm-mono), monospace;`

## Contact Information
(Used in the Contact Section, replacing the form)
- **Facebook**: https://www.facebook.com/entersight
- **Mail**: info@entersight-tech.com
- **SDT**: Lã Thị Kiều Oanh - Founder - 0941233481
