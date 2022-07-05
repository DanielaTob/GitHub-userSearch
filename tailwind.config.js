/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'bluedark': '#0A0C10',
      'bluelight': '#272B33',
      'blue': '#C38000',
      'white': '#ffffff',
      'gray': '#AAACAB',
    },
    extend: {
      fontFamily: {
        mono: ['Space Mono', "monospace"],
      },
    },
  },
  plugins: [],
}
