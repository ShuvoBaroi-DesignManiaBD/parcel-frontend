/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
 
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT(
  {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      'node_modules/preline/dist/*.js',
    ],
    theme: {
      extend: {
        // darkMode: 'class',
        animation: {
          
        },
        colors: {
          "primary": "#0B3C5C",
          "primaryLight": "#98D5EB",
          "PrimaryDark": "#062337",
          "secondary": "#EC6B05",
          "secondaryLight": "#062337",
          "secondaryDark": "#062337",
          "text": "#020C12",
          "bg": "#EDF7FD",
        }
      },
    },
    plugins: [
      require('preline/plugin'),
    ],
  }
)