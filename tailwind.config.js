import scrollbars from "tailwind-scrollbar";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {},
  },
  plugins: [scrollbars({ nocompatible: true })],
};
