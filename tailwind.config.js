/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "darkText": "#3b4363",
        "scoreText": "#2a46c0",
        "headerOutline": "#606e85"
      },
      fontFamily: {
        barlow: ["Barlow Semi Condensed"]
      }
    },
  },
  plugins: [],
}

