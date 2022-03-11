module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "0001" : "url('/src/Assets/friends.jpeg')",
        "0002" : "url('/src/Assets/GOT.jpeg')",
        "0003" : "url('/src/Assets/JS.jpeg')",
        "0004" : "url('/src/Assets/cricket.jpeg')",
        "homeQuiz" : "url('/src/Assets/homeQuiz.jpg')",
        "quizEnd" :  "url('/src/Assets/quizTrophy.png')",
        "quizEndBg" : "url(/src/Assets/quizend.jpg)",
        "quizNight" : "url(/src/Assets/quiz-night.jpg)"
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
      },
      black:{
        DEFAULT: '#000000'
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
