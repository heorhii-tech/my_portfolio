const important = require("tailwindcss-important");
/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: ["bg-black"],
  content: [],
  theme: {
    extend: {
      colors: {
        customBlue: "#0069C3",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [important()],
};
