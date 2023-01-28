// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"
import type { StyleFunctionProps } from '@chakra-ui/styled-system'
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/700.css'
import { Button } from './button'
// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.200',
      },
    },
  },
  colors: {
    brand: {
      100: "#FF3C00",
    },
  },
  fonts: {
    body: "Open sans, sans-serif",
  }, 
  components: {
    Button
  },
})
