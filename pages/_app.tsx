import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head'
import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  </>
}

export default MyApp;
