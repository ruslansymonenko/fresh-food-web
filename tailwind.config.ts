import type { Config } from 'tailwindcss';
import { FOOTER_HEIGHT, HEADER_HEIGHT } from './src/consts/webSite';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(225, 29, 72)',
        primaryDark: 'rgb(159, 18, 57)',
        primaryLight: 'rgb(251, 113, 133)',
        secondary: 'rgb(251, 146, 60)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        navbarHeight: `${HEADER_HEIGHT}px`,
        footerHeight: `${FOOTER_HEIGHT}px`,
        pageHeight: `calc(100vh - (${HEADER_HEIGHT}px + ${FOOTER_HEIGHT}px))`,
      },
      minHeight: {
        pageHeight: `calc(100vh - (${HEADER_HEIGHT}px + ${FOOTER_HEIGHT}px))`,
      },
      padding: {
        navbarHeight: `${HEADER_HEIGHT}px`,
      },
      margin: {
        navbarHeight: `${HEADER_HEIGHT}px`,
      },
    },
  },
  plugins: [],
};
export default config;
