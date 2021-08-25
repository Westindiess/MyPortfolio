module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			borderColor: (theme) => ({
				lightblue: "#00e1ff",
				grey: "#ccd6f6",
				lightgrey: "#1c2736",
			}),
			boxShadow: {
				white: "0 1px 3px 1px rgba(255, 255, 255)",
				lightblue: "0 1px 3px 1px rgba(0, 255, 255)",
			},
			backgroundColor: (theme) => ({
				lightblue: "#00e1ff",
				grey: "#ccd6f6",
				lightgrey: "#1c2736",
			}),

			textColor: {
				lightblue: "#00e1ff",
				grey: "#ccd6f6",
				lightgrey: "#1b293d",
			},
			keyframes: {
				"right-to-left": {
					"0%": {
						transform: "translateX(200px)",
					},
				},
				"left-to-right": {
					"100%": {
						transform: "translateX(-200px)",
					},
				},
			},
			animation: {
				"right-to-left": "right-to-left 0.2s ease",
				"left-to-right": "left-to-right 0.3s ease",
			},
		},
	},
	variants: {
		extend: {
			position: [`hover`],
		},
	},
	plugins: [],
}
