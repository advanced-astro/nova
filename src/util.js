export default {
	currentYear: new Date().getFullYear(),
	cwd: process.cwd(),
	greeting: () => {
		const greetings = [
			"G'day",
			'Hey',
			'Sup',
			'Bonjour',
			'Seiki',
			'Ciao',
			'Hola',
		];
		return greetings[Math.floor(Math.random() * greetings.length)];
	},
};
