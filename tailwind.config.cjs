/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#EC891C',
          'f5': '#F5B248',
          'f0': '#f08519',
          'e5': '#e56d15',
          'e8': '#e8ae4a',
          'da': '#dab96b',
        },
        'c8': '#c80000',
      },
      spacing: {
        '18': '4.5rem',
      }
    },
  },
  plugins: [],
}
