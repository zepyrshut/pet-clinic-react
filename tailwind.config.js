module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  plugins: [
    require('@tailwindcss/forms'),
  ],
  theme: {
    extend: {
      colors: {
        // Chromatic aberrations
        'turquoise': '#44bea7',
        'soft-lilac': '#f9ecf5',
        'purple': '#462776',
        'orchid': '#ec0a72',
        'digi-denim': '#023b5a',
        // Gray Scale
        'a-gray-soft': '#d9d9d9',
        'a-gray-medium': '#bfbfbf',
        'a-gray-dark': '#8c8c8c',
        'a-black-soft': '#262626',
        'a-black-dark': '#0d0d0d',
        // Dark nature colors
        'nature-dark-purple': '#161459',
        'nature-black': '#010326',
        'nature-dark-blue': '#192959',
        'nature-soft-blue': '#3C74A6',
        'nature-soft-sea-blue': '#5ABFAD',
      }
    },
  },
}