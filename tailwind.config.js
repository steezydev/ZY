/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Satoshi', ...fontFamily.sans],
        display: ['ClashDisplay', ...fontFamily.sans],
        accent: ['Outfit', ...fontFamily.sans],
      },
      colors: {
        dark: '#0A0A0A',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
