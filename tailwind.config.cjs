/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        indi: ["Indie Flower"],
      },
      dropShadow: {
        custom: "0 35px 35px red",
        customFooter: "0 0px 35px purple",
        customImgGods: "0 0 3px #fffffe",
      },
      boxShadow: {
        customCard: "0 0 10px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        bgLink: "url('src/img/bglinkmonster.png')",
        bgxyz: "url('src/img/xyz bg.jpg')",
        bgImgApp: "url('src/img/backgroundApp.jpg')",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
