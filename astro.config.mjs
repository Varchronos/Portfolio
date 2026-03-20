// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, passthroughImageService } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()]
	},

  site: 'https://example.com',
  integrations: [mdx(), sitemap(), icon()],

  image: {
      service: passthroughImageService(),
      domains: ["placehold.co", "bharatbrainz.com", "report.bharatbrainz.com", "classroomz.bharatbrainz.com"],
	},

  adapter: cloudflare(),
});