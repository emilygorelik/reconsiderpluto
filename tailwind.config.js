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
        'dark-blue': '#151D32',
        'dark-grey': '#1C2029',
        'light-grey': '#D9D9D9',
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
  safelist: [],
  plugins: [require('flowbite/plugin')],
};
