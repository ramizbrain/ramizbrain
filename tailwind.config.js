/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "work-sans": ["Work Sans", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#e4f7ec",
          100: "#e4f7ec",
          200: "#90dbb2",
          300: "#5cce93",
          400: "#23c37b",
          500: "#00b863",
          600: "#00a859",
          700: "#00964c",
          800: "#008440",
          900: "#00652b",
        },
        black: {
          50: "#faf8f8",
          100: "f2f1f1",
          200: "#e9e7e7",
          300: "#d8d7d7",
          400: "#b4b3b3",
          500: "#949393",
          600: "#6c6b6b",
          700: "#595757",
          800: "#212020",
          900: "#1a1919",
        },
      },
    },
  },
  plugins: [],
};
