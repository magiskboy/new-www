import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import favicon from '../images/website.png';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <>
    <Head>
      <title>Nguyen Khac Thanh</title>
      <link rel="icon" type="image/x-icon" href={favicon.src} />
      <meta name="description" content="My personal blog" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    </Head>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  </>
}

export default MyApp;
