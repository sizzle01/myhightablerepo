import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { myTheme } from '../../styles/Theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={myTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
