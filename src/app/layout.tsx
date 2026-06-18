import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";

// The Figma design uses SVN-Gotham (a paid Vietnamese display font) for
// headings and Roboto for body copy. SVN-Gotham is not available on Google
// Fonts, so Montserrat — a geometric sans with the closest character to
// Gotham — is used as the heading face. Roboto is mapped 1:1 from the design.
const montserrat = Montserrat({
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Entersight — Số hoá quy trình marketing đúng đích",
  description:
    "Entersight kiến tạo hệ sinh thái tiếp thị số toàn diện, giúp SMEs tái cấu trúc vận hành, làm chủ mọi điểm chạm khách hàng và xây dựng nền tảng tăng trưởng bền vững.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${montserrat.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
