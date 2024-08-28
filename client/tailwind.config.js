/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
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
