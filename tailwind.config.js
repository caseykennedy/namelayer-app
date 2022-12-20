/** @type {import('tailwindcss').Config} */

const colors = require('./src/ui/theme/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // sansMedium: [
        //   'NBInternationalPro-Medium',
        //   ...defaultTheme.fontFamily.sans,
        // ],
        // sansBold: ['NBInternationalPro-Bold', ...defaultTheme.fontFamily.sans],
        mono: ['NBInternationalPro-Mono'],
      },
      colors,
    },
  },
  plugins: [],
};
