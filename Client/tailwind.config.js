/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['poppins', 'sans-serif'],
        'bebas' : ['bebas', 'sans-serif'],
        'inter' : ['inter', 'sans-serif'],
        'fontColour' : '#06a54b'
      }
    },
  },
  plugins: [
    require('preline/plugin'),
    require('daisyui'),
  ],
}