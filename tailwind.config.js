module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "0001" : "url('/src/Assets/friends.jpeg')",
        "0002" : "url('/src/Assets/GOT.jpeg')",
        "0003" : "url('/src/Assets/JS.jpeg')",
        "0004" : "url('/src/Assets/cricket.jpeg')"
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      orange: {
        DEFAULT: '#fd7014',
      },
      white: {
        DEFAULT: '#eeeeee',
        dark: "#A9A9A9"
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
