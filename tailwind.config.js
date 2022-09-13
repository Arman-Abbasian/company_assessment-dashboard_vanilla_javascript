/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",
    "./public/*.html"
  ],
  theme: {
    extend: {
      colors: {
        blackDark:"#222831",
        grayDark:"#393E46",
        greenDark:"#00ADB5",
        whireDark:"#EEEEEE",
      }
    },
  },
  plugins: [],
}
