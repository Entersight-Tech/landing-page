import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// The Figma design uses SVN-Gotham (a paid Vietnamese display font) for
// headings and Roboto for body copy. SVN-Gotham is not available on Google
// Fonts, so Montserrat — a geometric sans with the closest character to
// Gotham — is used as the heading face. Roboto is mapped 1:1 from the design.
const montserrat = Montserrat({
  variable: "--nf-heading",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--nf-body",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

// Outlined (stroke-only) display type. Google serves Montserrat as a variable
// font whose glyphs keep overlapping contours, and -webkit-text-stroke draws
// those overlaps as stray lines inside letters (the "1" flag, "Ư" horn …).
// This is a static ExtraBold instance with the overlaps merged away.
const outline = localFont({
  src: "./fonts/montserrat-800-outline.woff2",
  variable: "--nf-outline",
  weight: "800",
  display: "swap",
});

const title = "Entersight — Số hoá quy trình marketing đúng đích";
const description =
  "Entersight kiến tạo hệ sinh thái tiếp thị số toàn diện, giúp SMEs tái cấu trúc vận hành, làm chủ mọi điểm chạm khách hàng và xây dựng nền tảng tăng trưởng bền vững.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.entersight-tech.com"),
  title,
  description,
  alternates: { canonical: "/" },
  // link previews on Facebook / Zalo; the image is src/app/opengraph-image.jpg
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "/",
    siteName: "Entersight",
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${montserrat.variable} ${roboto.variable} ${outline.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
