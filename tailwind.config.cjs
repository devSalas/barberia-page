/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/6': '3 /4',
      },
      minWidth: {
        'minimo': '300px',
      }
    },
  },
  plugins: [],
}
