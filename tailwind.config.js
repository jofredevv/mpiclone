/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B4571',
          dark: '#0D2235',
          light: '#2A69AC'
        },
        secondary: {
          DEFAULT: '#CC5500',
          dark: '#A34400',
          light: '#E66000'
        },
        orange: {
          DEFAULT: '#CC5500',
          dark: '#A34400',
          light: '#E66000'
        },
        accent: {
          DEFAULT: '#F5F8FA',
          dark: '#E1E8ED'
        },
        wine: {
          DEFAULT: '#722F37',
          dark: '#5A252C',
          light: '#8A373F'
        }
      }
    },
  },
  plugins: [],
};