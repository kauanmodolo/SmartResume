// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: [
    "puppeteer-core",
    "sparticuz/chromium",
  ],
  eslint: {
    ignoreDuringBuilds: true, // 👈 Adicione esta linha
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{
        loader: '@svgr/webpack',
        options: { svgo: true },
      }],
    });
    return config;
  },
};

export default nextConfig; // 👈 Única exportação necessária
