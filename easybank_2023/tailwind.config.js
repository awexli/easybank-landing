const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      mobileStart: '320px',
      mobile: '375px',
      mobileEnd: '425px',
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }
      laptop_xl: '1280px',
      laptop1366: '1366px',
      desktop: '1440px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-public-sans)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
