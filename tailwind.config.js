/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          xl: "1150px",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#274C5B",
        "primary-dark": "#525C60",
        secondary: "#7EB693",
        "secondary-light": "#C9DECF",
        accent: "#EFD372",
        "secondary-accent": "#D4D4D4",
        "secondary-accent-light": "#F9F8F8",
      },
    },
  },
  plugins: [],
};
