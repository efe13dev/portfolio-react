import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig, lazyPlugins } from "vite-plus";

export default defineConfig({
  fmt: {
    printWidth: 100,
    trailingComma: "all",
    tabWidth: 2,
    semi: true,
    singleQuote: false,
    bracketSpacing: true,
    arrowParens: "always",
  },
  lint: {
    plugins: ["oxc", "typescript", "unicorn"],
    jsPlugins: [
      "eslint-plugin-prettier",
      {
        name: "vite-plus",
        specifier: "vite-plus/oxlint-plugin",
      },
    ],
    categories: {
      correctness: "warn",
    },
    env: {
      builtin: true,
      browser: true,
      serviceworker: true,
      node: true,
    },
    ignorePatterns: [
      "node_modules",
      "dist",
      "coverage",
      ".idea",
      ".devin",
      ".agents",
      "hyperframes-reel",
    ],
    rules: {
      "no-array-constructor": "error",
      "no-unused-expressions": "error",
      "no-unused-vars": [
        "warn",
        {
          args: "after-used",
          argsIgnorePattern: "^_.*?$",
          caughtErrorsIgnorePattern: "^_.*?$",
        },
      ],
      "no-console": [
        "warn",
        {
          allow: ["error"],
        },
      ],
      "prettier/prettier": [
        "warn",
        {
          printWidth: 100,
          trailingComma: "all",
          tabWidth: 2,
          semi: true,
          singleQuote: false,
          bracketSpacing: true,
          arrowParens: "always",
          endOfLine: "auto",
          plugins: ["prettier-plugin-tailwindcss"],
        },
      ],
      "typescript/ban-ts-comment": "off",
      "typescript/no-duplicate-enum-values": "error",
      "typescript/no-empty-object-type": "error",
      "typescript/no-explicit-any": "off",
      "typescript/no-extra-non-null-assertion": "error",
      "typescript/no-misused-new": "error",
      "typescript/no-namespace": "off",
      "typescript/no-non-null-asserted-optional-chain": "error",
      "typescript/no-require-imports": "error",
      "typescript/no-this-alias": "error",
      "typescript/no-unnecessary-type-constraint": "error",
      "typescript/no-unsafe-declaration-merging": "error",
      "typescript/no-unsafe-function-type": "error",
      "typescript/no-wrapper-object-types": "error",
      "typescript/prefer-as-const": "error",
      "typescript/prefer-namespace-keyword": "error",
      "typescript/triple-slash-reference": "error",
      "vite-plus/prefer-vite-plus-imports": "error",
    },
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  plugins: lazyPlugins(() => [react()]),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
