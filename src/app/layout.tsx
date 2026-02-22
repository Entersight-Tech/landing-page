import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk, DM_Mono } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Entersight Marketing Solution",
  description: "AI-Powered Marketing & Operations",
};

import IntersectionObserverSetup from "@/components/IntersectionObserverSetup";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${bebasNeue.variable} ${spaceGrotesk.variable} ${dmMono.variable}`}>
        {children}
        <IntersectionObserverSetup />
      </body>
    </html>
  );
}
