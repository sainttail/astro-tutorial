// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://kaleidoscopic-praline-97f6b5.netlify.app/",
  integrations: [preact()]
});