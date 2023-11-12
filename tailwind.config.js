/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        MainBg: "#fbf9f9",
        MainText: "#472c35",
      },
    },
  },
  plugins: [],
};
