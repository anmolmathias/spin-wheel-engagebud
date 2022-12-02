/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans'],
        'notosans': ['Noto Sans', 'sans'],
        'roboto': ['Roboto', 'sans'],
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
