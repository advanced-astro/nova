const _ = require('lodash');
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
			},
		},
		extend: {
			fontFamily: {
				sans: ['Instrument Sans', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities, config, e }) {
			const flowSpaceUtilities = _.map(config('theme.spacing'), (value, key) => {
				return {
					[`.${e(`flow-space-${key}`)} > *`]: {
						'--flow-space': `${value}`,
					},
				};
			});

			addUtilities(flowSpaceUtilities);
		}),
		require('@tailwindcss/typography'),
	],
};
