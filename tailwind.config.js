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
      },
      backgroundImage:{
        slide1: "url('https://i.ibb.co.com/3zTPYt5/pexels-kindelmedia-6572963.jpg')",
        slide2: "url('https://i.ibb.co.com/bmwRy1K/jpeg-optimizer-pexels-anhleephoto-29582092.jpg')",
        slide3: "url('https://i.ibb.co.com/z7gC4DS/jpeg-optimizer-pexels-kindelmedia-6572962.jpg')",
        slide4: "url('https://i.ibb.co.com/ckD4ZVT/jpeg-optimizer-pexels-mart-production-8032923.jpg')",
        errorPage: "url('https://i.ibb.co.com/JkrT7J5/404.gif')",

      }
    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: [
      "light",
      "dark"
    ],
  },
}