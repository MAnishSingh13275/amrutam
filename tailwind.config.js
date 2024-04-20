/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        Banner: "url('/src/Assets/Images/Banner2.png')",
      },
    },
  },
  plugins: [],
};
