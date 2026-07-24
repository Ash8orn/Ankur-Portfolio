import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // Do not ship source maps to production (avoids leaking original source).
    // (No console/debugger stripping needed: the source contains none.)
    sourcemap: false,
  },
  server: {
    port: 5173,
    open: true,
  },
});
