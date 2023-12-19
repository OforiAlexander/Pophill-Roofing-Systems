/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'candy': ["Emilys Candy, serif;"]
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

