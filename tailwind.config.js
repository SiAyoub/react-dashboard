/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        'custom-color' : '#584DE2',
       
      },
      borderWidth: {
        'custom-width': '2.31px', // Add a custom border width
      },
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'], // Add Fredoka as a custom font
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
