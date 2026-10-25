import type { Metadata, Viewport } from "next";
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

const title = "Entersight — Marketing và vận hành bằng AI cho doanh nghiệp nhỏ";
const description =
  "Entersight dựng hệ thống vận hành, chạy quảng cáo và làm nội dung cho doanh nghiệp vừa và nhỏ. Oni Homestay vận hành không cần lễ tân, KYE Agency ra nội dung nhanh gấp 5 lần.";

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

// mobile browser chrome takes the colour of the top of the page
export const viewport: Viewport = {
  themeColor: "#08071a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${montserrat.variable} ${roboto.variable} ${outline.variable}`}>
      <body>
        {/* without JS the scroll reveals would never run: show everything */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}.wipe,.wipe img{clip-path:none!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
