/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        'subtle': '8px',
      },
      dropShadow: {
        'neon': '0 0 10px var(--color-accent-1)',
        'neon-indigo': '0 0 10px var(--color-accent-2)',
        'warm-gold': '0 0 10px var(--color-accent-1)',
        'pastel-coral': '0 0 8px var(--color-accent-1)',
        'cyber-green': '0 0 12px var(--color-accent-1)',
        'cyber-blue': '0 0 12px var(--color-accent-2)',
      },
    },
  },
  plugins: [],
}
