/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*tsx'],
  theme: {
    extend: {
      fontFamily:{
        sans: 'Inter, sans-serif',
      },
      colors:{
        purple:{
          200: '#F5F3FE',
          500: '#7E74F1',
        },
        blue:{
          500: '#4EA8DE',
          900: '#232E35'
        },
        gray:{
          400: '#656D72',
        },
        screens: {
          'md': '890px'
        },
      },
    },
  },
  plugins: [],
}


