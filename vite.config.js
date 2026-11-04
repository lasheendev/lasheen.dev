import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    // Project data lives in json/ at the repo root.
    fs: { allow: ["json"] },
  },
});
