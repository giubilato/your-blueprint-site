/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Questo asterisco ** dice: "cerca in TUTTE le sottocartelle"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Aggiungi questo per forzare Inter
      },
    },
  },
  plugins: [],
}