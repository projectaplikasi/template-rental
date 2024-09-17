/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        'abupink':'#B39F9F', 
         'cklt' : '#644D4D',
         'cream' : '#b99470',
         'white' : '#FFFFFF',
      }
    },

  },
  plugins: [require('flowbite/plugin')],
}

