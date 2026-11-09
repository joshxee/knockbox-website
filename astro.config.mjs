// @ts-check
import { defineConfig } from 'astro/config';

// Static output, deployed to Cloudflare. See README.md.
export default defineConfig({
  site: 'https://knockbox.nz',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  image: {
    // Generated responsive images are written to /_astro at build time.
    responsiveStyles: false,
  },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});
