import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#c3edef",
        purple: "#8f5bbd",
        black: "#000000",
        white: "#ffffff"
      },
      fontFamily: {
        corals: ['TT Fors', 'sans-serif'], 
      },
    },
  },
  plugins: [],
} satisfies Config;
