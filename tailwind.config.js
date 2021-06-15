const colors = require("tailwindcss/colors")

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "rich-black": "#0B0C10",
        "gun-metal": "#1F2833",
        silver: "#C5C6C7",
        "fluorescent-blue": "#66FCF1",
        "cadet-blue": "#45A29E",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
