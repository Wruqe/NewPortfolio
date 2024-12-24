/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["MyCustomFont"],
        customBold: ["MyCustomFont-bold"], // Add your font here
      },
    },
  },
  plugins: [],
};
