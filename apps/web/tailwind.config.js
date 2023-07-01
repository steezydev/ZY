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
      cursor: {
        pointer:
          "url(data:image/svg+xml,%3Csvg width='27' height='28' viewBox='0 0 27 28' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.60926 8.12811L24.5188 13.6642C25.1456 13.8969 25.2948 14.7157 24.7904 15.1546L13.3012 25.1506C12.7967 25.5894 12.0065 25.3284 11.8627 24.6754L8.44232 9.14338C8.29235 8.46237 8.95554 7.88537 9.60926 8.12811Z' fill='%230D0D0D' fill-opacity='0.8' stroke='%23EBEBEB'/%3E%3C/svg%3E%0A), pointer",
      },
      padding: {
        '1px': '1px',
      },
      borderRadius: {
        xl: '0.70rem',
        lg: '0.55rem',
      },
      boxShadow: {
        darken: '0px 0px 20px 20px rgba(0,0,0,0.2);',
      },
      dropShadow: {
        glow: '0 35px 35px rgba(255, 255, 255, 0.25)',
        darkenn: 'var(--shadow-elevation-high)',
      },
      fontFamily: {
        primary: ['Satoshi', ...fontFamily.sans],
        display: ['ClashGrotesk', ...fontFamily.sans],
        accent: ['CPMono', ...fontFamily.sans],
      },
      colors: {
        secondary: '#828C96',
        darkSecondary: '#171717',
        greySecondary: '#E3E3E3',
        black: '#060606',
        white: '#EBEBEB',
        dark: '#0F0F0F',
        darker: '#0C0C0C',
        green: '#00ECA5',
        yellow: '#FFF7AB',
        purple: '#9E00FF',
        cyan: '#008A93',
        red: '#FF005C',
        blue: '#0069E3',
        footerText: '#505050',
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
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};
