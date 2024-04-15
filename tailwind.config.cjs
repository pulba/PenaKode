/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind');
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        whisper: ['Whisper', 'cursive'],
        abril: ['Abril Fatface', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        goldman: ['Goldman', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        lexend: ['Lexend', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        wides: '.1em',
        widest: '.25em',
      },
      animation: {
        rotation: 'rotation 20s linear infinite',
      },
      keyframes: {
        rotation: {
          '0%': { transform: 'rotate(0deg)', transformOrigin: 'center' },
          '50%': { transform: 'rotate(180deg)', transformOrigin: 'center' },
          '100%': { transform: 'rotate(360deg)', transformOrigin: 'center' },
        },
      },
    },
  },
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
  },
};
