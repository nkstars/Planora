/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#fdfbf7',
          100: '#faf6ee',
          200: '#f4ecdd',
          300: '#ece0cb',
          400: '#ddccb0',
          500: '#c9b691',
        },
        sage: {
          50: '#f5f8f4',
          100: '#e8f0e5',
          200: '#cfe0ca',
          300: '#aec9a5',
          400: '#8bae80',
          500: '#6e9561',
          600: '#56794a',
          700: '#44613b',
          800: '#374e30',
          900: '#2c3f27',
        },
        charcoal: {
          50: '#f6f6f5',
          100: '#e9e8e6',
          200: '#cfcfca',
          300: '#8a887f',
          400: '#72716a',
          500: '#64625a',
          600: '#4f4d46',
          700: '#3e3c36',
          800: '#2b2a26',
          900: '#1c1b18',
        },
        champagne: {
          50: '#fdfaf3',
          100: '#f9f0db',
          200: '#f1e0b8',
          300: '#e6cc8c',
          400: '#d9b663',
          500: '#b08838',
          600: '#8f6a33',
          700: '#7a5a25',
          800: '#6b4f22',
          900: '#4d3919',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 3px rgba(28,27,24,0.04), 0 8px 24px -8px rgba(28,27,24,0.08)',
        card: '0 1px 2px rgba(28,27,24,0.04), 0 4px 16px -6px rgba(28,27,24,0.06)',
        lift: '0 2px 6px rgba(28,27,24,0.06), 0 12px 32px -10px rgba(28,27,24,0.12)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.97)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out both',
        'scale-in': 'scale-in 0.25s ease-out both',
      },
    },
  },
  plugins: [],
};
