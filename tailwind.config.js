/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        fancy: ["'UnifrakturMaguntia'", "cursive"],
        secondary: ["'Faculty Glyphic'", "sans-serif"],
      },
      colors: {
        darkCustom: "#1b263b",
        lightCustom: "#e0e1dd",
        projectCardsLight: "#fbfbf2",
        projectCardsDark: "#3e5c76",
        brand: {
          500: "#778da9",
          600: "#415a77",
        },
        neutral: {
          950: "#555b6e",
          960: "#e0e1dd"
        },
      },
    },
  },
  plugins: [],
};
