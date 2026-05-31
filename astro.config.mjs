import { defineConfig } from 'astro/config';

// Custom domain (set via CNAME file + DNS record).
// See public/CNAME for the domain configured for GitHub Pages.
export default defineConfig({
  site: 'https://www.stoneandkey.consulting',
  trailingSlash: 'ignore',
  build: {
    assets: 'assets',
  },
});