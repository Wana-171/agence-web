/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      custom1: "#ff77e9",
      red: colors.red,
      orange: colors.orange,
    },
    extend: {},
  },
  plugins: [],
};
