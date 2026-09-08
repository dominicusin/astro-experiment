// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dominicusin.github.io',
  base: '/astro-experiment',
  trailingSlash: 'always',
  output: 'static',
  outDir: '../dominicusin.github.io/public/astro-experiment',
  markdown: {
    syntaxHighlight: 'shiki',
  },
  integrations: [
    tailwind(),
    sitemap(),
  ],
});
