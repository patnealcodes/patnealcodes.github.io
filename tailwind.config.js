/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./shared/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      darkMode: 'class',
      colors: {
        'theme-green': '#42b883',
        'theme-dark': '#0F172A',
        'theme-light': '#F5F5FB',
        'theme-text': '#E2E8F0'
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
        nice: '0px 7px 29px 0px rgba(0, 0, 0, 0.35)'
      },
    },
  },
  plugins: [
    plugin(({addComponents, theme}) => {
      addComponents({
        '.theme-mask': {
          'background-color': theme('colors.theme-green'),
          'background-image': `radial-gradient(circle at center,${theme('colors.theme-dark')} 0%,${theme('colors.theme-dark')} 33%,transparent 33%)`,
          'background-repeat': 'no-repeat',
          'background-size': '300% 300%',
          'background-position': '50% 50%',
          'transition': '.3s all',
        
          '&:hover': {
            'background-position': '100% 0'
          }
        },
        '.theme-mask-i': {
          'background-color': theme('colors.theme-dark'),
          'background-image': `radial-gradient(circle at center,${theme('colors.theme-green')} 0%,${theme('colors.theme-green')} 33%,transparent 33%)`,
          'background-repeat': 'no-repeat',
          'background-size': '300% 300%',
          'background-position': '50% 50%',
          'transition': '.3s all',
        
          '&:hover': {
            'background-position': '100% 0'
          }
        }
      })
    })
  ],
}
