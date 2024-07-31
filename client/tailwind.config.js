/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        current: "#2739DF",
        currentDarker: "#2134de",
        darkerBlue: "#051a49",
        magenta: {
          100: "#FF00FF",
          200: "#ad03ad",
        },
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
