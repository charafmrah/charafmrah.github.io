import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: "https://charafmrah.github.io",
  integrations: [mdx(), sitemap(), tailwind(), react(), image()]
});