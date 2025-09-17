const {heroui} = require('@heroui/theme');
const {nextui} = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/popover.js"
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        BlackPrimary:"#161513",
        BlackSecondary:"#1C1C22",
        WhitePrimary:"#F0F2F5",
        WhiteSecondary:"#FFFFFF",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        baiJamjuree: ["var(--font-bai-jamjuree)", "sans-serif"],
      },
      backgroundImage: {
        'Gradient': 'linear-gradient(90deg, #B16CEA, #FF5E69, #FF8A56, #FFA84B)',
      },
      animation:{
        'ping-large':'ping-large 1s ease-in-out infinite',
        'move-left':'move-left 1s linear infinite',
        'move-right':'move-right 1s linear infinite'
      },
      keyframes:{
        'ping-large':{
          '75%,100%':{
            transform:'scale(3)',
            opacity:'0',
          }
        },
        'move-left':{
          '0%':{
            transform:'translateX(0)'
          },
          '100%':{
            transform:'translateX(-50%)'
          }
        },
        'move-right':{
          '0%':{
            transform:'translateX(-50%)'
          },
          '100%':{
            transform:'translateX(0)'
          }
        }
      }
    },
  },
  darkMode: "class",
  plugins: [nextui(),heroui()],
};
