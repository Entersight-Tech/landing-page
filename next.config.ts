import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Use the system certificate store so Turbopack can fetch next/font
    // assets from Google Fonts in restricted/CI environments.
    turbopackUseSystemTlsCerts: true,
  },
};

export default nextConfig;
