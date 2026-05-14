/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', '"Courier New"', 'monospace'],
      },
      colors: {
        // Your Blueprint brand palette
        // See docs/02-brand/brand-book.md for usage rules
        brand: {
          // Primary blue (Tailwind blue-600)
          DEFAULT: '#2563EB',
          50:  '#EFF6FF',
          500: '#3B82F6',
          600: '#2563EB', // primary
          700: '#1D4ED8', // pressed
        },
        // Surface colors used across the dark-mode site
        surface: {
          900: '#0a0a0a',  // page background
          800: '#0d1219',  // section background
          700: '#111827',  // card background
        },
      },
      boxShadow: {
        'brand-glow':       '0 0 15px rgba(37, 99, 235, 0.5)',
        'brand-glow-hover': '0 0 25px rgba(37, 99, 235, 0.7)',
      },
    },
  },
  plugins: [],
}
