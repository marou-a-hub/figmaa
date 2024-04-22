module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        blue_gray: { 100: "#d9d9d9", 900: "#282a3a", "900_8e": "#282a3a8e" },
        orange: { 400: "#ffb21e" },
        red_900: "#6d1500",
      },
      boxShadow: {},
      fontFamily: { inter: "Inter", playfairdisplay: "Playfair Display" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
