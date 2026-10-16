import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Use the system certificate store so Turbopack can fetch next/font
    // assets from Google Fonts in restricted/CI environments.
    turbopackUseSystemTlsCerts: true,
  },
  // the product page was published as Review365, then briefly EnterReview
  async redirects() {
    return [
      { source: "/review365", destination: "/etstar", permanent: true },
      { source: "/enterreview", destination: "/etstar", permanent: true },
    ];
  },
};

export default nextConfig;
