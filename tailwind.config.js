/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",
    "./public/*.html"
  ],
  theme: {
    extend: {
      colors: {
        blackDark:"#171717",
        greenDark:"#4E9F3D",
        whiteDark:"#D8E9A8",
      }
    },
  },
  plugins: [],
}
