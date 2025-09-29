import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      montserrat: ["Avenir Light", "sans-serif"],
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
      backgroundSize: {
        full: "100%",
        "50%": "50%",
        "40%": "40%",
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        DEFAULT: "4px",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "1rem",
        full: "9999px",
      },
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
        introPic: "var(--intro-image-url)",
        aboutPic: "var(--about-image-url)",
        workPic: "var(--work-image-url)",
      },
      boxShadow: {
        around:
          "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
        project:
          "2px 2px 12px -1px rgb(0 0 0 / 0.1), 0 2px 10px 0 rgb(0 0 0 / 0.1)",
      },
      spacing: {
        "47%": "47vh",
        "50%": "50vh",
        "65%": "65vh",
        "72%": "72vh",
        "75%": "75vh",
        "82%": "82vh",
        "85%": "85vh",
      },
    },
  },
  plugins: [daisyui],
};
