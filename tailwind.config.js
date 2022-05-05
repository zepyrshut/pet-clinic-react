module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'turquoise': '#44bea7',
        'soft-lilac': '#f9ecf5',
        'purple': '#462776',
        'orchid': '#ec0a72',
        'digi-denim': '#023b5a'
      }
    },
  },
  plugins: [
    require("flowbite/plugin"),
  ],
}