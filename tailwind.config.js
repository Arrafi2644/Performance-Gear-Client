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
        slide2: "url('https://i.ibb.co.com/mSGgw5v/pexels-mart-production-8032923.jpg')",
        slide3: "url('https://i.ibb.co.com/XjxjVLZ/pexels-kindelmedia-6572962.jpg')",
        slide4: "url('https://i.ibb.co.com/MfNsKD7/pexels-anhleephoto-29582092.jpg')",
      }
    },
  },
  plugins: [require('daisyui'),],
}