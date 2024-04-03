/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    './index.html',
    './src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily:{
        'logo': ["Mystery Quest", 'system-ui'],
        'body': ['Averia Sans Libre', 'sans-serif']
      }
    },
  },
  plugins: [],
}

