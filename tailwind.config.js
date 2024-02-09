/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "chewy": "chewy",
        "Balsamiq-Sans": "Balsamiq Sans"
      },
      backgroundSize: {
        "full": "100% 100%"
      },
      animation: {
        'movebike2': 'heroheart 30s linear  infinite',
        'movebike1': 'heroheart2 30s linear  infinite',
        'bounce2': 'bounce2 5s linear infinite',
      },
      keyframes: {
        bounce2: {
          '0%': { transform: 'translateY(-10%)' },
          '50%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-10%)' },
        },
        heroheart: {
          '0%': { transform: 'translateX(0) rotate3d(1, 1, 1, 0deg)' },
          '100%': { transform: 'translateX(-100vw) rotate3d(1, 1, 1, 45deg)' }
        },
        heroheart2: {
          '0%': { transform: 'translateX(0)  ' },
          '100%': { transform: 'translateX(328px) ' }
        },
      }
    },
  },
  plugins: [],
}

