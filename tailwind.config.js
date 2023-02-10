/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    colors: {
      'background-dark': '#362A30',
      'background-dark-800': '#13131F',
      'background-light': '#FFD9B7',

      'light-pink': '#FFD9B7',
      'dark-blue': '#090921',

      'white': '#FFFFFF',
      'yellow': '#F9C409',
      'violet': '#8F09F9',
      'violet-trans': '#8F09F960',
      'pink': '#EA0B60',
      'blue-light': '#00D4FF',
    },
    extend: {
      animation: {
        wiggle: 'wiggle 3.5s linear infinite',
      },
      boxShadow: {
        'shadow-light': '3px 4px 4px 0px #FFD9B721',
        'shadow-dark': '0px 4px 4px 0px #00000040',
      },

      colors: {

      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateX(-25%)' },
          '50%': { transform: 'translateX(25%)' },
        }
      }
    },
  },
  plugins: [],
}