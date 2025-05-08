/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      boxShadow: {
        soft: '0 8px 32px rgba(0,0,0,0.05)',
      },
      colors: {
        primary: "#a71e25",
        secondary: "#133557",
        accent: "#f1d71d",
        light: "#c9c9c8",
        white: "#ffffff",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      transitionProperty: {
        'scale': 'transform',
      },
      transformOrigin: {
        'center-bottom': 'center bottom',
      }
    },
  },
  plugins: [],
};
