type TailwindTokenSet = Record<string, string>
export const spacing: TailwindTokenSet = {
  sm: '0.375rem',
  md: '1.125rem',
  lg: '1.375rem',
}
export const colors: TailwindTokenSet = {
  primary: '#4A4063',
  secondary: '#BFACC8',
}
export const borderRadius: TailwindTokenSet = {
  xl: 'calc(var(--radius) + 4px)',
  lg: 'var(--radius)',
  md: 'calc(var(--radius) - 2px)',
  sm: 'calc(var(--radius) - 4px)',
}
