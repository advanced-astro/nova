import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

import site from './src/site.js';

// https://astro.build/config
export default defineConfig({
	site: site.url,
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		image({
			serviceEntryPoint: '@astrojs/image/sharp',
		}),
		sitemap(),
		partytown(),
	],
});
