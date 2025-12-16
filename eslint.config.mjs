import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // Добавляем пробелы в фигурных скобках
      "object-curly-spacing": ["error", "always"],
      "max-len": ["error", { code: 80, ignoreComments: true, ignoreStrings: true, ignoreTemplateLiterals: true }],
      'react/jsx-closing-bracket-location': ['error', { selfClosing: 'line-aligned', nonEmpty: 'line-aligned' }],
      'react/jsx-indent': ['error', 2],

    },
  },
]);

export default eslintConfig;
