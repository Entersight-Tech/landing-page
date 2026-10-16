import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Use the system certificate store so Turbopack can fetch next/font
    // assets from Google Fonts in restricted/CI environments.
    turbopackUseSystemTlsCerts: true,
  },
  // the product page was first published as Review365
  async redirects() {
    return [{ source: "/review365", destination: "/enterreview", permanent: true }];
  },
};

export default nextConfig;
