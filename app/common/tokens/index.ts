import type { Config } from 'tailwindcss'
import { createThemes } from 'tw-colors'

const colors = {
  light: {
    'primary': '#EDE3E9',
    'secondary': '#EBC3DB',
    'secondary-fade': '#F0D1E3',
    'success': '#DFFFD6',
    'success-fade': '#EFFFEB',
    'danger': '#FFC4C4',
    'warning': '#FBBF24',
    'light': '#FFFFFF',
    'dark': '#374151',
  },
  dark: {
    primary: '#1DEED8',
    secondary: '#6B7280',
    success: '#22C55E',
    danger: '#EF4444',
    warning: '#FBBF24',
    light: '#374151',
    dark: '#E5E7EB',
  },
}

export const themes = createThemes({
  ...colors,
  hallowen: {
    primary: '#10AEA1',
    secondary: '#6B7280',
    success: '#22C55E',
    danger: '#EF4444',
    warning: '#FBBF24',
    light: '#374151',
    dark: '#E5E7EB',
  },
})

export const spacing = {
  'none': 'unset',
  'sm': '0.375rem',
  'md': '1.125rem',
  'lg': '1.375rem',
  'xl': '1.5rem',
  '2xl': '2rem',
}
export const gap = {
  0: spacing.none as string,
  2: spacing.sm as string,
  4: spacing.md as string,
  8: spacing.lg as string,
}

export const borderRadius = {
  sm: '0.125rem',
  md: '0.375rem',
  lg: '0.5rem',
  full: '9999px',
  none: '0',
}
export const borderWidth = {
  'thin': '1px',
  'normal': '2px',
  'thick': '4px',
  '2x-thick': '8px',
  'none': '0',
}
export const fontSize = {
  'sm': '0.875rem',
  'md': '1rem',
  'lg': '1.125rem',
  'xl': '1.25rem',
  '2xl': '1.5rem',
}
export const fontWeight = {
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
}

export const flex = {
  1: '1 1 0%',
  auto: '1 1 auto',
  initial: '0 1 auto',
  none: 'none',
}

export const fontFamily = {
  manrope: ['Manrope'],
}

export function createTailwindConfig(env: 'development' | 'production'): Config {
  return {
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
      colors: env === 'production' ? colors : {},
    },
    plugins: env === 'production'
      ? []
      : [
          themes,
        ],
  }
}
