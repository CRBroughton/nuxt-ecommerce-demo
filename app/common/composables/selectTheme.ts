type Theme = 'light' | 'dark'
export function setColourTheme(newTheme: Theme) {
  useColorMode().preference = newTheme
}
