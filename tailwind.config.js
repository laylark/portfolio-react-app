/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/rice-bowl.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      opacity: {
      "80": ".8",
      "95": ".95",
      "50": ".5",
      }
    },
  },
  plugins: [],
};
