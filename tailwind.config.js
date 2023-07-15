/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        "hero_bg":"url('./src/assets/videos/ct.gif')"
      }
    },
  },
  plugins: [],
}