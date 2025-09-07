/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        raasWhite: '#FFFFFF',
        raasGold: '#FFD700',
        raasBlack: '#000000',
      },
    },
  },
  plugins: [],
};
