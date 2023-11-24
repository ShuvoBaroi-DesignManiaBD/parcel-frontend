/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    fontFamily: {
      'jost': ['Jost', 'Inter'],
      'cormorant': ["cormorant-garamond", 'serif'] // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {
      darkMode: 'class',
      animation: {
        
      },
      colors: {
        
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
};