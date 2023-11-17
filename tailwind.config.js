/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#EEF8F9',
          100: '#F5F5F5',
          200: '#EAEAEA',
          300: '#DFDFDF',
          400: '#678385',
          500: '#579196',
          600: '#666666',
          700: '#4C4C4C',
          800: '#333333',
          900: '#191919',
        },
        blue: {
          100: '#E6F0FD',
          200: '#CCE2FC',
          300: '#99C5FA',
          400: '#66A9F7',
          500: '#338CF5',
          600: '#0070F4',
          700: '#0064DA',
          800: '#0059C2',
          900: '#004391',
        },
        teal: {
          100: '#E6FFFA',
          200: '#37A1A8',
          300: '#6CE2EA',
          400: '#15CAD6',
          500: '#1AA8B1',
          600: '#4C898E',
          // 700: '#2C7A7B',
          700: '#479297',
          800: '#387C81',
          900: '#1B5D61',
        },
        orange: {
          500: '#CFCA46',
        },
      },
      fontFamily: {
        montserrat: [
          "'Montserrat'",
          'sans-serif',
          ...defaultTheme.fontFamily.sans,
        ],
        manrope: ["'Manrope'", 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        xs: '0 0 0 1px rgba(0, 0, 0, 0.16)',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.16)',
        default: '0px 4px 20px 0px rgba(56, 124, 129, 0.70)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)',
        outline: '0px 0px 10px 0px rgba(56, 124, 129, 0.30)',
        none: 'none',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.svg')",
        'hero-pattern-desktop': "url('/images/hero-bg-desktop.svg')",
        'hero-pattern-right-desktop':
          "url('/images/hero-bg-right-desktop.svg')",
        'contacts-pattern': "url('/images/contacts-bg.svg')",
        'about-bg': "url('/images/about-bg.svg')",
        'about-mobile-bg': "url('/images/about-bg-mobile.svg')",
        'about-3xl-bg': "url('/images/about-bg-3xl.svg')",
        'services-mobile-bg': "url('/images/services-bg-mobile.svg')",
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      // fontFamily: {
      //   inter: ['var(--font-inter)', 'sans-serif'],
      // },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.625rem',
        '5xl': '3.25rem',
        '6xl': '5.5rem',
      },
      inset: {
        '1/2': '50%',
        full: '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      lineHeight: {
        none: '1',
        tighter: '1.125',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
        3: '.75rem',
        4: '1rem',
        5: '1.2rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
      },
      minWidth: {
        10: '2.5rem',
        48: '12rem',
      },
      opacity: {
        90: '0.9',
      },
      scale: {
        98: '.98',
      },
      screens: {
        '3xl': '1920px',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5%)' },
        },
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
    require('tailwind-scrollbar-hide'),
  ],
}