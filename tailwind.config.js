/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'placeholder': '#1d1d1d'
      },
      boxShadow: {
        'custom': '0 0 0 10px #e9ebec, 0 0 0 11px #fcfdfe',
        'custom1': '0 8px 10px -4px rgba(0, 0, 0, 0.2)',
        'custom2': '0 0 0 2px #fff, 0 0 0 3px #1d1d1d'
      }
    },
  },
  plugins: [],
}

