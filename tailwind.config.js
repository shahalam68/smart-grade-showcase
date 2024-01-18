/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        'updown':{
          '0%, 100%':{transform: 'translateY(-20px)'},
          '50%':{transform:'translateY(20px)'}
        }
      },
      animation:{
        'updown':'updown 3s ease-in-out infinite '
      },
      fontFamily:{
        Inter: ['Inter'],
      },
			container: {
				center: true,
				padding: "1.25rem",
			},
			colors: {
				clifford: "#da373d",
			},
		},
	},
	plugins: [],
}