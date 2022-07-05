/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'bluedark': '#141C2F',
      'bluelight': '#1F2A48',
      'blue': '#0079FE',
      'white': '#ffffff',
      'gray': '#AAACAB',
    },
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
}
