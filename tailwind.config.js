module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      orange: {
        DEFAULT: '#fd7014',
      },
      white: {
        DEFAULT: '#eeeeee',
      },
      gray: {
        darkest: '#222831',
        light: '#393e46',
      },
      green:{
        DEFAULT: '#34D399'
      },
      red:{
        DEFAULT: '#EF4444'
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
