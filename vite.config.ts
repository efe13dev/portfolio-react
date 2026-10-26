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
    sortImports: {
      groups: [
        "type",
        "builtin",
        "external",
        ["internal", "subpath"],
        "parent",
        "sibling",
        "index",
        "style",
        "unknown",
      ],
    },
    sortTailwindcss: true,
    ignorePatterns: ["hyperframes-reel", ".devin", ".agents"],
  },
  lint: {
    plugins: ["oxc", "typescript", "unicorn"],
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    categories: {
      correctness: "error",
    },
    env: {
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
      "no-unused-vars": [
        "warn",
        {
          args: "after-used",
          argsIgnorePattern: "^_.*?$",
          caughtErrorsIgnorePattern: "^_.*?$",
        },
      ],
      "no-console": ["warn", { allow: ["error"] }],
      "typescript/no-empty-object-type": "error",
      "typescript/no-require-imports": "error",
      "typescript/no-unnecessary-type-constraint": "error",
      "typescript/no-unsafe-function-type": "error",
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
