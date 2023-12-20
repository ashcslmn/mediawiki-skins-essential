module.exports = {
	mode: 'jit',
	purge: {
		content: [
			'./templates/*',
			'./templates/*/*',
			'./includes/*.php',
			'./tailwind.css'
		]
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		aspectRatio: {
			auto: 'auto',
			square: '1 / 1',
			video: '16 / 9',
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
			7: '7',
			8: '8',
			9: '9',
			10: '10',
			11: '11',
			12: '12',
			13: '13',
			14: '14',
			15: '15',
			16: '16'
		},
		extend: {
			colors: {
				'pink-leni': '#ce1069',
				'blue-leni': '#031684',
				'black-leni': '#1b1b1e'
			},
			padding: {
				'1/3': '33.33%',
				'2/3': '66.67%'
			},
			height: {
				128: '32rem',
				112: '28rem',
				110: '30rem'
			},
			opacity: {
				60: '0.6',
				65: '0.65',
				70: '0.7',
				75: '0.75'
			}
		},
		zIndex: {
			'-1': '-1',
			0: '0',
			10: '10',
			20: '20',
			30: '30',
			40: '40',
			50: '50',
			auto: 'auto'
		}
	},
	variants: {
		aspectRatio: [ 'responsive' ],
		extend: {}
	},
	important: 'html',
	plugins: [
		require( '@tailwindcss/typography' ),
		require( '@tailwindcss/forms' ),
		require( '@tailwindcss/aspect-ratio' ),
		require( '@tailwindcss/line-clamp' )
	]
};
