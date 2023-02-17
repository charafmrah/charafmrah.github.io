import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://charafmrah.com",
  integrations: [image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), mdx(), sitemap(), tailwind(), react(), compress(), partytown()]
});