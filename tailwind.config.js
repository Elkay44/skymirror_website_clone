/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a56db', // Deep Trustworthy Blue
          dark: '#1542a5',
          light: '#4285f4',
        },
        accent1: {
          DEFAULT: '#00a39d', // Electric Teal
          dark: '#008a83',
          light: '#34c7c1',
        },
        accent2: {
          DEFAULT: '#f5a623', // Sharp Orange
          dark: '#d48a00',
          light: '#ffbe4d',
        },
        accent3: {
          DEFAULT: '#a0a0a0', // Futuristic Silver
          dark: '#808080',
          light: '#c0c0c0',
        },
        accent4: {
          DEFAULT: '#ffd700', // Futuristic Gold
          dark: '#d4af37',
          light: '#ffd700',
        },
        neutral: {
          50: '#ffffff',
          100: '#f8f9fa',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#6c757d',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
      },
      fontFamily: {
        heading: ['"GT Walpurgis"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        space: ['"Space Grotesk"', 'sans-serif'],
      },
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        'full': '9999px',
      },
      boxShadow: {
        'sm': '0 2px 4px rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '10px',
        'lg': '16px',
      },
      transitionProperty: {
        'width': 'width',
      }
    },
  },
  plugins: [],
}
