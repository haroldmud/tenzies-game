/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blues':'#0b2434',
        'held':'#59E391',
      }
    },
  },
  plugins: [],
}
