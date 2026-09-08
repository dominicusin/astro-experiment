// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dominicusin.github.io',
  base: '/astro-experiment',
  trailingSlash: 'always',
  output: 'static',
  markdown: {
    syntaxHighlight: 'shiki',
  },
  integrations: [
    tailwind(),
    sitemap(),
  ],
});
