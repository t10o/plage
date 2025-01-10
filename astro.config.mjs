import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://plage.t10o.one",
  integrations: [tailwind(), react(), icon(), sitemap()],

  server: {
    host: true,
  },

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
