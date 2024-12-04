/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bai-jamjuree': '["Bai Jamjuree", "sans-serif"]'
      },
      colors:{
        primary: '#1ABC9C',
        secondary: '#2C3E50',
        third: '#ECF0F1',
        accent: '#DEAA79'
      }
    },
  },
  plugins: [require('daisyui'),],
}