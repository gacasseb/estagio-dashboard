const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1F2937',
        'secondary': '#1f29372e',
      }
    },
  },
  plugins: [],
});

// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         'primary': '#1F2937',
//         'secondary': '#1f29372e',
//       }
//     },
//   },
//   plugins: [],
// };

