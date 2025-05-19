import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mdx()],
  server: {
    port: 3000,
    open: true,
  },
});
