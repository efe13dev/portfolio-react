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
          // Separar bibliotecas 3D pesadas
          "three-vendor": ["three", "three-globe"],
          "react-three-vendor": ["@react-three/fiber", "@react-three/drei"],
          // Separar otras bibliotecas grandes
          "ui-vendor": ["framer-motion", "lucide-react", "react-icons/fa"],
          "email-vendor": ["@emailjs/browser"],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Aumentar límite de advertencia a 1MB
  },
  optimizeDeps: {
    include: [
      "three",
      "three-globe",
      "@react-three/fiber",
      "@react-three/drei",
    ],
  },
});
