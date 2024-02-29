import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: '#1C1C3E',
      lightblue: '#29295F',
      purple: '#8787FF',
      gray: '#ECECEC',
      white: 'white',
      overlay: 'rgba(0,0,0,0.2)',
    },
    extend: {
      aspectRatio: {
        '14/6': '14.2 / 6',
        '4/3': '4 / 3',
      },
      scale: {
          '-100': '-1',
      }
    },
  },
  plugins: [],
};
export default config;
