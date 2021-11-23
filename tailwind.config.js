module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				medium: {
					500: '#EAEAEA',
				},
				primary: {
					100: '#f8f1ec',
					200: '#ebd5c7',
					300: '#EFDDD2',
					350: '#E9CDAE',
					400: '#d09c7c',
					500: '#be774a',
					600: '#a9663d',
					700: '#834f2f',
					800: '#5e3922',
					900: '#382214',
				},
				secondary: {
					100: '#92a8d3',
					200: '#6d8ac5',
					350: '#496db6',
					300: '#C8CDD6',
					350: '#A7AFBD',
					400: '#3a5792',
					500: '#2c426d',
					600: '#a9663d',
					700: '#24375b',
					800: '#1c2a46',
					900: '#0f1624',
				},
			},
			spacing: {
				'2/3': '66.666667%',
				'9/12': '75%',
				'10/12': '83.33333%',
				'11/12': '91.666667%',
			},
		},

		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				md: '2rem',
				lg: '4rem',
				xl: '6rem',
				'2xl': '8rem',
			},
		},
		screens: {
			sm: '641px',
			// => @media (min-width: 640px) { ... }

			md: '769px',
			// => @media (min-width: 768px) { ... }

			lg: '1025px',
			// => @media (min-width: 1024px) { ... }

			xl: '1281px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1537px',
			// => @media (min-width: 1536px) { ... }
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
