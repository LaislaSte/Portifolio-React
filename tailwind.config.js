/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    // colors: {
    // 'background': '#13131F',
    // 'yellow': '#F9C409',
    // 'violet': '#8F09F9',
    // 'pink': '#EA0B60',
    // 'blue-light': '#00D4FF',
    // },
    extend: {
      animation: {
        wiggle: 'wiggle 3.5s linear infinite',
      },
      colors: {
        'background': '#13131F',
        'yellow': '#F9C409',
        'violet': '#8F09F9',
        'violet-trans': '#8F09F960',
        'pink': '#EA0B60',
        'blue-light': '#00D4FF',
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