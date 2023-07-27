export default {
	/**
	 * Site name, useful for page titles
	 */
	name: `Astro Starter`,

	/**
	 * Company Information
	 */
	email: `info@resknow.co.uk`,
	phone: '0208 300 8833',
	address: '13 St Johns Parade, Sidcup, Kent, DA14 6ES',
	url: 'https://example.com',

	/**
	 * Menus
	 */
	menus: {
		main: [
			{ label: 'Home', href: '/' },
			{ label: 'About', href: '/about' },
			{ label: 'Services', href: '/services' },
			{ label: 'Contact Us', href: '/contact' },
		],
		splitLeft: [
			{ label: 'Home', href: '/' },
			{ label: 'Services', href: '/services' },
		],
		splitRight: [
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
