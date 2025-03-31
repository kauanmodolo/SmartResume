import type { NextConfig } from "next";
import type { Configuration, RuleSetRule } from "webpack";

const nextConfig: NextConfig = {
  webpack(config: Configuration) {
    // Localiza a regra existente para arquivos `.svg`
    const fileLoaderRule = config.module?.rules?.find(
      (rule): rule is RuleSetRule => 
        !!rule && typeof rule === "object" && rule.test instanceof RegExp && rule.test.test(".svg")
    );

    if (fileLoaderRule) {
      // Atualiza a regra existente para tratar `.svg` como recursos quando explicitado via `?url`
      fileLoaderRule.resourceQuery = /url/;

      // Adiciona a configuração para o SVGR
      config.module?.rules?.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ },
        use: ["@svgr/webpack"],
      });

      // Remove `.svg` da regra original
      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },
};

export default nextConfig;
