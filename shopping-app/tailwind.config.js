/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "0px",
      lg: "1024px",
    },
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        "dark-grey": "#67696E",
        "footer-text": "#D9DBE1",
        "line-light-grey": "#E9EBEE",
        "pale-green": "#A7C6BA",
        orange: "#EC5E2A",
        "hero-bg": "#EAEEEF",
        "body-background": "#FDFDFD",
      },
    },
  },
  plugins: [],
};
