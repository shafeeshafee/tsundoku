module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				offwhite: "#FFFFEE",
				dark: "#2C2C2C",
				reddish: "#AB1212",
			},
			fontFamily: {
				headings: ["Jost"],
				title: ["Libre Baskerville"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
