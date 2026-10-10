import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
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
  subsets: ["latin", "vietnamese"],
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
    <html lang="vi" className={`${montserrat.variable} ${roboto.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
