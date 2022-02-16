const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false,
  theme: {
    fontFamily: {
      nova: ["Nova Round", "cursive"],
      dosis: ["Dosis", "sans-serif"],
      josefin: ["Josefin Sans", "sans-serif"],
    },
    extend: {
      colors: {
        sky: colors.sky,
      },
    },
  },
  variants: {
    extend: {
      scale: ["hover"],
      display: ["responsive", "dropdown"],
    },
  },
  plugins: [require("tailwindcss-dropdown")],
};
