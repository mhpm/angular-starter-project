/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,scss,ts}"],
  theme: {
    colors: {
      ...colors,
      primary: colors.teal,
      secondary: colors.gray,
      warning: colors.yellow,
      danger: colors.red,
    },
    extend: {},
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [require("@tailwindcss/forms")],
};
