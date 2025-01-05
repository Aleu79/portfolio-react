/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        wave: 'wave 1s ease-in-out infinite', 
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(15deg)' },
          '50%': { transform: 'rotate(0deg)' },
          '75%': { transform: 'rotate(-15deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
    },
  },
}