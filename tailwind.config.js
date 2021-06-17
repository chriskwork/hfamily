module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: { sans: ['Noto Sans KR', 'sans-serif'] },
    extend: {
      colors: {
        primary: '#ff7777',
        secondary: '#4b8bb3',
        secondaryLight: '#c8ccdf',
        darkGrey: '#545668',
        lightGrey: '#a8abbb',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
