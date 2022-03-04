import { extendTheme } from '@chakra-ui/react'
import { Theme } from '../styles/theme'
export const theme = extendTheme({
  colors: {
    brand: {
      100: '#FF9916',
      90: '#F7F1E5',
    },
    black: {
      100: '#000000',
      90: '#666670',
    },
    white: {
      100: '#ffffff',
    },
    fieldBg: '#F4F8FB',
  },
})
