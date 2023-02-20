/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        LM_DarkGray: 'hsl(0, 0%, 52%)',
        LM_VeryLightGray: 'hsl(0, 0%, 98%)',
        LM_VeryDarkBlue: 'hsl(200, 15%, 8%)',
        DM_DarkBlue: 'hsl(209, 23%, 22%)',
        DM_VeryDarkBlue: 'hsl(207, 26%, 17%)',
      },
    },
  },
  plugins: [],
};
