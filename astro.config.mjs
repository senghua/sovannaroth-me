// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sovannaroth.me',
  integrations: [sitemap()],
  build: {
    // Single-page site — inline the one CSS file so the browser can paint
    // without an extra render-blocking request.
    inlineStylesheets: 'always',
  },
});
