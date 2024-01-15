/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,vue,js,ts}",
    // Add other file types or directories as needed
  ],
  theme: {
    fontFamily: {
      bevietnam: ["bevietnam"],
    },
    extend: {
      colors: {
        themebgcolor: "#F2F6FA",
        navbgcolor: "#005C9A",
        headingclr: "#333333",
        cardheadingclr: "#454545",
        textcolor: "#333333",
        borderclr: "#F1F1F3",
      },
    },
  },
  plugins: [],
};
