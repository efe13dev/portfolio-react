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
    rollupOptions: {
      output: {
        manualChunks: {
          "ui-vendor": ["framer-motion", "lucide-react", "react-icons/fa"],
          "email-vendor": ["@emailjs/browser"],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Aumentar límite de advertencia a 1MB
  },
});
