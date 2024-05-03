/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['cinzel', 'sans-serif'],
        kepler: ['kepler', 'sans-serif']
      },
      colors: {
        primary: '#C72030',
        dark: '#1A1A1A',
        bglight1: '#F6F4EE',
        bglight2: '#EFEDE5',
        bglight3: '#D5DBDB',
        bglight4: '#DBC2A9',
        bglight5: '#C4B89D',
        bglight6: '#DAD6C9'
      },
      screens: {
        "2xl": "1561px",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        "loop-scroll": "loop-scroll 10s linear infinite"
      },
    },
  },
  plugins: [],
};
