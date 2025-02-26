/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#56e10b",
        secondary: "#ffee00",
        background: "#0c0c24",
      },
      animation: {
        blob: "blob 15s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "scale(1) translate(0px, 0px)",
          },
          "33%": {
            transform: "scale(1.2) translate(-800px, 50px)",
          },
          "66%": {
            transform: "scale(0.9) translate(-100px, 400px)",
          },
          "100%": {
            transform: "scale(1) translate(0px, 0px)",
          },
        },
      },
    },
  },
  plugins: [],
};
