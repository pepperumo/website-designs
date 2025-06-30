// Tailwind config using external theme for reusability
const theme = require('./tailwind.theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      ...theme,
    },
  },
  plugins: [
    // require('tailwindcss-neumorphism'),
  ],
};
