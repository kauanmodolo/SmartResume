import type { NextConfig } from "next";
import test from "node:test";
import type { Configuration, RuleSetRule } from "webpack";

const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: [
      "puppeteer-core",
      "sparticuz/chromium",
    ],
  },
  webpack(config: { module: { rules: { test: RegExp; use: { loader: string; options: { svgo: boolean; }; }[]; }[]; }; }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: true, // Otimiza o SVG
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;



export default nextConfig;
