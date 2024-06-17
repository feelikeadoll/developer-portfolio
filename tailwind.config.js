/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundSize: {
      "50%": "50%",
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        lato: ["Lato"],
        garamond: ["Garamond"],
      },
      colors: {
        lightgrey: "#f6f6f6",
        midgrey: "#D8D7D6",
      },
      backgroundImage: {
        introPic: "url('./src/assets/intro-pic.jpg')",
      },
    },
  },
  plugins: [],
};
