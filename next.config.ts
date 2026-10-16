import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // the product page moved when Fashion Studio was renamed MUSE Studio
  async redirects() {
    return [{ source: "/fashion-studio", destination: "/muse", permanent: true }];
  },
  experimental: {
    // Use the system certificate store so Turbopack can fetch next/font
    // assets from Google Fonts in restricted/CI environments.
    turbopackUseSystemTlsCerts: true,
  },
};

export default nextConfig;
