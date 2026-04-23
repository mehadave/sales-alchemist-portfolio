/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        bg: {
          primary: '#0a0a0a',
          surface: '#111111',
          elevated: '#161616',
        },
        border: {
          subtle: '#1e1e1e',
          DEFAULT: '#252525',
          strong: '#333333',
        },
        accent: {
          DEFAULT: '#c9a84c',
          muted: '#8a7035',
          dim: '#3d3018',
        },
        ink: {
          primary: '#f0efe8',
          secondary: '#8a8a7e',
          muted: '#4e4e48',
        },
        light: {
          bg: '#f5f4f0',
          surface: '#ebebE4',
          border: '#d4d3cc',
          ink: '#1a1a17',
          secondary: '#5a5a52',
          muted: '#9a9a90',
        },
      },
      animation: {
        'scroll-bounce': 'scrollBounce 2s ease-in-out infinite',
      },
      keyframes: {
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(6px)', opacity: '0.4' },
        },
      },
    },
  },
  plugins: [],
}
