import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#A100FF',
          50: '#f5e6ff',
          100: '#e6ccff',
          200: '#d4a3ff',
          300: '#A100FF',
          400: '#8c00e6',
          500: '#7a00cc',
          600: '#6800b3',
          700: '#560099',
          800: '#440080',
          900: '#320066',
        },
        primary: {
          DEFAULT: '#000000',
          50: '#f5f5f5',
          100: '#e5e5e5',
          200: '#d4d4d4',
          300: '#a3a3a3',
          400: '#737373',
          500: '#525252',
          600: '#404040',
          700: '#262626',
          800: '#171717',
          900: '#000000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
      },
    },
  },
  plugins: [],
}
export default config
