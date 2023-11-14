/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./shared/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'theme-dark': '#22262D',
        'theme-green': '#42b883',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontFamily: {
        sans: ['var(--font-dank)'], // sans-sans
        mono: ['var(--font-dank)'],
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
