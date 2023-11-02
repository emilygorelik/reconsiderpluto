/* eslint-disable quotes */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    screens: {
      sm: '640px',
      md: '1000px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontSize: {
      10: 10,
      12: 12,
      14: 14,
      16: 16,
      18: 18,
      20: 20,
      24: 24,
    },
    fontFamily: {},
    extend: {
      colors: {
        blue: {
          50: '#',
          100: '#',
          200: '#4363ac',
          300: '#3987c7',
          400: '#284997',
        },
        grey: {
          50: '#f0f1f0',
          100: '#e3e2e1',
          200: '#c8c8c8',
          300: '#a7c0b5',
          400: '',
          500: '#4c545b',
          600: '#545D65',
          700: '#24282D',
          800: '#1E2023',
        },
      },
      transitionProperty: {
        height: 'height',
        width: 'width',
        spacing: 'margin, padding',
      },
      backgroundImage: {},
      boxShadow: {},
      keyframes: {},
      animation: {},
      zIndex: {},
      spacing: {},
    },
  },
  safelist: ['grey', 'blue'],
  plugins: [require('flowbite/plugin')],
};
