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
      28: 28,
      32: 32,
      48: 48,
      52: 52,
      56: 56,
      sm: '0.8rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    fontFamily: {
      jua: ['Jua', 'sans-serif'],
    },
    extend: {
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
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#151D32', //navy blue
          secondary: '#D9D9D9', //gray
          accent: '#CA9A72', //sandy pink
          'base-100': '#1C2029', //dark gray (black)
          success: '#36d399', //green
          warning: '#fbbd23', //yellow-orange
          error: '#f87272', //red-pink
        },
      },
    ],
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwindcss-animated'),
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],
};
