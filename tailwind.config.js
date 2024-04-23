/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C72030',
        dark: '#1A1A1A',
        bglight1: '#F6F4EE',
        bglight2: '#EFEDE5',
        bglight3: '#DAD6C9'
      },
      screens: {
        "2xl": "1561px",
      },
    },
  },
  plugins: [],
};
