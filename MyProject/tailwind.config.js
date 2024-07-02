/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        cream: '#F8F8F8',
        light_red: '#FF7F7F',
      },
    },
  },
  plugins: [],
}

