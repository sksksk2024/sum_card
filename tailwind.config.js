module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust the path if your components are elsewhere
  theme: {
    screens: {
      'sm': {'min': '320px', 'max': '410px'},
    },

    extend: {
      fontFamily: {
        hanken: ["hanken"],
      },
      colors: {
        "pale-blue": "hsl(221, 100%, 96%)",
        "slate-blue": {
          "light": "hsl(252, 100%, 67%)",
          "dark": "hsl(241, 81%, 54%)",
        },
        "violet-blue": "hsla(256, 72%, 46%, 1)",
        "dark-gray-blue": "hsl(224, 30%, 27%)",
        "light-red": {
          default: "hsl(0, 100%, 67%)",
          light: "hsl(0, 100%, 67%, .2)",
        },
        "orangey-yellow": {
          default: "hsl(39, 100%, 56%)",
          light: "hsl(39, 100%, 56%, .2)",
        },
        "green-teal": {
          default: "hsl(166, 100%, 37%)",
          light: "hsl(166, 100%, 37%, .2)",
        },
        "cobalt-blue": {
          default: "hsl(234, 85%, 45%)",
          light: "hsl(234, 85%, 45%, .2)",
        },
      }
    },
  },
  plugins: [],
};