export default {
	/**
	 * Site name, useful for page titles
	 */
	name: `Bolt`,

	/**
	 * Company Information
	 */
	email: `studio@resknow.co.uk`,
	phone: '0208 300 8833',
	address: '13 St Johns Parade, Sidcup, Kent, DA14 6ES',
	url: 'https://bolt.resknow.co.uk',

	/**
	 * Social Links
	 */
	social: {
		facebook: 'https://www.facebook.com/',
		twitter: 'https://twitter.com/',
		instagram: 'https://www.instagram.com/',
		linkedin: 'https://www.linkedin.com/',
		youtube: 'https://www.youtube.com/',
		pinterest: 'https://www.pinterest.com/',
		tiktok: 'https://www.tiktok.com/',
		github: 'https://github.com/resknow/bolt',
	},

	/**
	 * Menus
	 */
	menus: {
		main: [
			{ label: 'Home', href: '/' },
			{
				label: 'Components',
				href: '#',
				children: [
					{
						label: 'Headers',
						href: '/patterns/headers',
						icon: 'pattern-header',
					},
					{
						label: 'Footers',
						href: '/patterns/footers',
						icon: 'pattern-footer',
					},
					{
						label: 'Heros',
						href: '/patterns/heros',
						icon: 'pattern-hero',
					},
					{
						label: 'Misc',
						href: '/patterns/misc',
						icon: 'pattern-misc',
					},
					{
						label: 'Post Layouts',
						href: '/patterns/posts',
						icon: 'pattern-post',
					},
					{
						label: 'Text Layouts',
						href: '/patterns/text',
						icon: 'pattern-text',
					},
					{
						label: 'Images',
						href: '/patterns/images',
						icon: 'pattern-image',
					},
				],
			},
			{ label: 'Templates', href: '/templates' },
		],
		demo: [
			{ label: 'Home', href: '/' },
			{ label: 'About', href: '/about' },
			{ label: 'Services', href: '/services' },
			{ label: 'Contact Us', href: '/contact' },
		],
		demoSplitLeft: [
			{ label: 'Home', href: '/' },
			{ label: 'Services', href: '/services' },
		],
		demoSplitRight: [
			{ label: 'About', href: '/about' },
			{ label: 'Contact', href: '/contact' },
		],
	},

	/**
	 * Cookie Consent Banner
	 */
	cookieConsent: {
		show: true,
	},

	/**
	 * View Transitions
	 */
	enableViewTransitions: true,
};
