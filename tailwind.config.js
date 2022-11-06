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
      padding: {
        '1px': '1px',
      },
      borderRadius: {
        xl: '0.70rem',
        lg: '0.55rem',
      },
      dropShadow: {
        glow: '0 35px 35px rgba(255, 255, 255, 0.25)',
      },
      fontFamily: {
        primary: ['Satoshi', ...fontFamily.sans],
        display: ['ClashDisplay', ...fontFamily.sans],
        accent: ['Outfit', ...fontFamily.sans],
      },
      colors: {
        secondary: '#B7B7B7',
        darkSecondary: '#171717',
        dark: '#0A0A0A',
        green: '#00ECA5',
        yellow: '#FFF7AB',
        purple: '#9E00FF',
        cyan: '#008A93',
        red: '#FF005C',
        blue: '#0069E3',
      },
      animation: {
        slideTop:
          'slide-top 0.2s cubic-bezier(0.445, 0.050, 0.550, 0.950) both',
      },
      keyframes: {
        'slide-top': {
          '0%': { transform: 'translateY(10px) translateX(-50%)', opacity: 0 },
          '100%': { transform: 'translateY(0) translateX(-50%)', opacity: 1 },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
