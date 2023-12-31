/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {  
    colors:{
    'daarkblue':'#062A49',
    'black':'#000',
    'yellow':'rgb(188, 188, 8)',
    'white':'#FFFFFF',
    'gray':'#5a5a5a',
    'footer':'e9ecef',
    'lightgray':'rgba(0, 0, 0, 0.2)'

  },
    extend: {},
  },
  plugins: [],
}

