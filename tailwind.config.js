/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  content: ["./*.html", "./paginas/**/*.html"],
  theme: {
    extend: {
      colors: { amarillo: { DEFAULT: '#ffeb00', claro: '#fff58a' } },
      fontFamily: {
        sans: ["'Lucida Sans'", "'Lucida Grande'", 'Geneva', 'Verdana', 'sans-serif']
      }
    }
  }
}
