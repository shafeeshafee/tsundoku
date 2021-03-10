module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				"girl-library":
					"url('https://images.unsplash.com/photo-1543844347-7db8e8541bc8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')",
			}),
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
