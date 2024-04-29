/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "420px",
      },
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#30335F",
          dark: "#023535",
          light: "#DCF2FF",
        },
        secondary: {
          DEFAULT: "#FD4552",
          dark: "#D21E2B",
          light: "#F4E6EB",
        },
        light: "#F3F7FC",
      },
      textColor: {
        primary: {
          DEFAULT: "#30335F",
        },
        secondary: {
          DEFAULT: "#FD4552",
        },
      },
    },
  },
  plugins: [],
};
