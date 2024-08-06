import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      'rivo':{
        100:'#D3E2D7',
        200:'#A9D4BA',
        300:'#93B9A2',
        400:'#C2EFD4',
        500:'#6BC785',
        600:'#267D49',
        700: '#224F34',
      },
      'rivoText':{
        100:'#373737',
        200:'#454545'
      }

    }
  },
  plugins: [],
};
export default config;
