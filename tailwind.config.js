/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      mainFont: ["Poppins", "sans-serif"],
    },

    extend: {},
  },
  plugins: [require("daisyui")],
};
