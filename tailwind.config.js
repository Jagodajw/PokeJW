const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/views/**/*.{html,ts}', './src/app/components/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: '#1F3464',
          light: '#837EA6',
        },
        accent: {
          DEFAULT: '#BE2623',
        },
        black: {
          DEFAULT: '#242121',
        },
        white: {
          DEFAULT: '#FFFFFF',
          50: '#FFEEEE',
        },
      }
    },
  },
  plugins: [],
}

