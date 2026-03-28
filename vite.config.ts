import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: "ui-vendor",
              test: /node_modules[\\/](framer-motion|lucide-react|react-icons)[\\/]/,
              priority: 10,
            },
            {
              name: "email-vendor",
              test: /node_modules[\\/]@emailjs[\\/]/,
              priority: 10,
            },
          ],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
