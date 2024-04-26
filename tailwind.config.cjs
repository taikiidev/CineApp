/** @type {import('tailwindcss').Config} */

const withMt = require("@material-tailwind/react/utils/withMT");
module.exports = withMt({
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: 'rgb(18, 18, 18)',
          200: 'rgb(51, 51, 51)'
        },
      brand: {
          100: '#e74c3c',
          200: '#c0392b'
        }
      }
    },
  },
  plugins: [],
})
