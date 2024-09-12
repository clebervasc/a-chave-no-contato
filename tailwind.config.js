/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        white: '#FCFCFC',
        black: '#1E1E1E',
        blue: '#2647BD',
        green: '#1ACA17'
      },
      backgroundSize: {
        '100%': '100%',
      },
      fontFamily: {
        days_one: ['Days One', 'system-ui'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        spin: 'spin 1s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}

