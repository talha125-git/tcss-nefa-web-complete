/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to top, #e1e4e6, #93dff6)',
      },
    },
  },
  plugins: [],
}

