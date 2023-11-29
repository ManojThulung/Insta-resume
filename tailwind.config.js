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
      colors: {
        primary: {
          DEFAULT: "#015048",
          dark: "#023535",
        },
        secondary: {},
      },
      fontFamily: {
        "noto-sans": ["Noto Sans", "sans-serif"],
      },
      textColor: {
        primary: {
          light: "#C7FEEC",
        },
        secondary: {
          light: "#C7FEEC",
        },
      },
    },
  },
  plugins: [],
};
