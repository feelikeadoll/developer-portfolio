/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundSize: {
      full: "100%",
      "50%": "50%",
      "40%": "40%",
    },
    fontSize: {
      sm: "0.8rem",
      md: "0.9rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "7.5xl": "5.3rem",
      "8xl": "6rem",
      "8.5xl": "6.9rem",
      "9xl": "8rem",
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
        darkgrey: "#868383",
        pink: "#F089A3",
        "hover-pink": "#DF7590",
      },
      backgroundImage: {
        introPic: "url('./src/assets/intro-pic.jpg')",
        aboutPic: "url('./src/assets/about-pic.jpg')",
        workPic: "url('./src/assets/work-pic.jpg')",
      },
      boxShadow: {
        around:
          "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
      },
      spacing: {
        "50%": "50vh",
        "65%": "65vh",
        "82%": "82vh",
        "85%": "85vh",
      },
    },
  },
  plugins: [require("daisyui")],
};
