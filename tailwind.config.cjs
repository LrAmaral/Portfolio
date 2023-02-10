/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.*",
    "./index.html"
  ],
  theme: {
    extend: {
      keyframes: {
        appear: {
          '0%': {
            transform: 'translateY(-50px)',
            opacity: '0'
          }
        ,
          '100%': {
            opacity: '1'
          }
        }
      },
      fontFamily: {
        'sans': ['Inknut Antiqua'],
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    dropShadow: {
      
    },
  },
  plugins: [],
}
