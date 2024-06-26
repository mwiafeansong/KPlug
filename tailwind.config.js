/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lightGold: '#ffbf00',
        gold: '#d4af37',
        navyBlue: '#2c3e50',
        lightBlue: '#4ca1af',
      },
    },
  },
  plugins: [require('tailwind-scrollbar'), require('tailwind-scrollbar-hide')],
};
