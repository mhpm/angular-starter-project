/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,scss,ts}"],
  theme: {
    colors: {
      ...colors,
      primary: {
        500: colors.fuchsia[500],
        400: colors.fuchsia[400],
      },
      secondary: colors.gray,
      warning: colors.yellow,
      danger: colors.red,
    },
    extend: {
      colors: {
        brown: {
          50: "#fdf8f6",
          100: "#f2e8e5",
          200: "#eaddd7",
          300: "#e0cec7",
          400: "#d2bab0",
          500: "#bfa094",
          600: "#a18072",
          700: "#977669",
          800: "#846358",
          900: "#43302b",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
