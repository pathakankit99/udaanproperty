import '../styles/globals.css'
import '../styles/utsav.css'
import '../styles/contact.css'
import 'react-slideshow-image/dist/styles.css'
import {ChakraProvider} from '@chakra-ui/react'
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>      
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
