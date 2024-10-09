import {
  borderRadius,
  borderWidth,
  flex,
  fontFamily,
  fontSize,
  fontWeight,
  gap,
  spacing,
  themes,
} from './app/common/tokens'

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  safelist: ['dark'],
  prefix: '',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './error.vue',
    './app/**/**/**/*.{js,vue,ts}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    borderRadius,
    borderWidth,
    flex,
    fontFamily,
    fontSize,
    fontWeight,
    gap,
    spacing,
    // colors: {},
  },
  plugins: [
    themes,
  ],
}
