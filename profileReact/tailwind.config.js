/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0A0908',
        'secondary': '#47682C',
        'tartiary': '#FF5666',
        'feldgrau': '#546D64',
        'celadon': '#AAD2BA'
      },
      boxShadow: {
        '3xl': '0 10px 50px 0px rgba(0, 0, 0, 0.15)'
      }
    },
  },
  plugins: [],
}

