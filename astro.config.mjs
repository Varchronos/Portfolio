// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()]
	},
	site: 'https://example.com',
	integrations: [mdx(), sitemap(), icon()],
	image: {
		domains: ["placehold.co", "bharatbrainz.com", "report.bharatbrainz.com", "classroomz.bharatbrainz.com"],
	},
});
