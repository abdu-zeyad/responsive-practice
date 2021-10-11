module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
      'MyFont': ['"My Font"', 'serif'],
      'sexy': ['Changa', 'sans-serif']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
