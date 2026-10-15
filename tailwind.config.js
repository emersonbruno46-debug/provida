/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          DEFAULT: '#6D182E',
          dark: '#4B1021',
          deep: '#330A15',
          light: '#FBF2F4',
          border: '#E8C9D1',
        },
        gold: {
          DEFAULT: '#B99463',
          light: '#F7F3EE',
          dark: '#9A7350',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          subtle: '#FCFAF8',
          cream: '#F7F4EF',
        },
        ink: {
          DEFAULT: '#241E20',
          muted: '#6E6468',
          light: '#9E9498',
        },
        border: {
          subtle: '#ECE5DE',
          light: '#F2EDE7',
        }
      },
      fontFamily: {
        serif: ['Newsreader', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(75, 16, 33, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)',
        'card': '0 4px 20px -2px rgba(75, 16, 33, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 12px 32px -4px rgba(75, 16, 33, 0.09), 0 4px 12px -2px rgba(0, 0, 0, 0.03)',
        'elevated': '0 20px 45px -10px rgba(75, 16, 33, 0.12)',
        'dropdown': '0 16px 36px -4px rgba(36, 30, 32, 0.12)',
      },
      borderRadius: {
        'xl': '14px',
        '2xl': '18px',
        '3xl': '24px',
      }
    },
  },
  plugins: [],
}
