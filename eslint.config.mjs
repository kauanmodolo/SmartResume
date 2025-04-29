import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
    rules: {
      // Desabilita erros de variáveis não utilizadas
      "@typescript-eslint/no-unused-vars": "off",
      
      // Desabilita erros de uso de 'any'
      "@typescript-eslint/no-explicit-any": "off",
      
      // Desabilita avisos sobre tags <img>
      "@next/next/no-img-element": "off"
    }
  })
];

export default eslintConfig;
