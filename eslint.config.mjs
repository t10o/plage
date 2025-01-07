import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginAstro from "eslint-plugin-astro";
import reactEslint from 'eslint-plugin-react';
import reactHooksEslint from 'eslint-plugin-react-hooks';
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tailwind from "eslint-plugin-tailwindcss";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tsEslint from "typescript-eslint";

export default [
  js.configs.recommended,
  ...tsEslint.configs.recommended,
  eslintConfigPrettier,
  ...eslintPluginAstro.configs["flat/recommended"],
  ...eslintPluginAstro.configs["flat/jsx-a11y-recommended"],
  ...tailwind.configs["flat/recommended"],
  reactEslint.configs.flat['jsx-runtime'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        dataLayer: false,
      },
    },
    plugins: {
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
      'react-hooks': reactHooksEslint,
    },
    rules: {
      ...reactHooksEslint.configs.recommended.rules,
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
];
