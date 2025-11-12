/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        walgreens: {
          red: "#E31837",
          blue: "#004F9F",
          gold: "#D4AF37",
          tan: "#F5E6D3",
          darkRed: "#B8122F",
        }
      }
    },
  },
  plugins: [],
}
