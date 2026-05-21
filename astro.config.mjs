import { defineConfig } from 'astro/config';

// GitHub Pages publishes this repo to:
//   https://stone-and-key-consulting.github.io/stone-key-web/
// If a custom domain is added later, set `site` to it and remove `base`.
export default defineConfig({
  site: 'https://stone-and-key-consulting.github.io',
  base: '/stone-key-web',
  trailingSlash: 'ignore',
  build: {
    assets: 'assets',
  },
});
