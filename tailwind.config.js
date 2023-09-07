/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        prim: '#1B56DB',
        sec: '#635DFF',
      },
      keyframes: {
        spinner: {
          '0%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        spinner: 'spinner 4s linear infinite',
      },
    },
  },
  plugins: [],
}
