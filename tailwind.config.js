/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#00a295',
        'main-light': '#73e2d9',
        'main-text': '#2f385c'
      }
    }
  },
  plugins: []
}
