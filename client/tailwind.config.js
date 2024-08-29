/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '425px', // Custom breakpoint for extra small screens
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        'homebg': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../src/Assets/Images/coding.png")',
      },
      fontFamily:{
        'matemasie': '"Matemasie", sans-serif'
      },
    },
  },
  plugins: [],
}
