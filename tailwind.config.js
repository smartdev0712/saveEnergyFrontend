/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './pages/**/*.{html,js}',
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    // colors: {
    //   'blue': '#1fb6ff',
    //   'purple': '#7e5bef',
    //   'pink': '#ff49db',
    //   'orange': '#ff7849',
    //   'green': '#13ce66',
    //   'yellow': '#ffc82c',
    //   'gray-dark': '#273444',
    //   'gray': '#8492a6',
    //   'gray-light': '#d3dce6',
    //   'current': 'currentColor'
    // },
    fontFamily: {
      sans: ['MetricHPEXS', 'Arial', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      width: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'virtual-tour': "url('/src/assets/image (12).jpg')",
        'footer-image': "url('/src/assets/image (13).jpg')",
        'countdown' : "url('/src/assets/network/image (7).jpg')",
        'event-background-image' : "url('/src/assets/network/image (26).jpg')",
        'greenlake-image': "url('/src/assets/image (29).jpg')",
        'countDown-text': "url('/src/assets/network/image (9).jpg')",
        'privacy-background' : "url('/src/assets/privacy/image.png')",
        'article-cover': "url('/src/assets/blog/image (8).jpg')", 
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwindcss-children'),
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin'),
  ],
}
