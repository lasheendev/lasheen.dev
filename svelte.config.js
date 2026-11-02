import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import preprocessor from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocessor({
      scss: {
        prependData: `@use './src/styles/variables.scss' as *;`,
      },
    }),
    vitePreprocess({}),
  ],
  kit: {
    // The site is fully static (project data is fetched in the browser),
    // so every page is prerendered to plain HTML.
    adapter: adapter(),
  },
};

export default config;
