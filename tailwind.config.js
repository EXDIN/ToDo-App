/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: '#d2b48c',
        beigeLight: '#E6E6FA',
      },
      screens: {
        'max-600px': {'max': '600px'},
      },
    },
  },
  plugins: [],
}

