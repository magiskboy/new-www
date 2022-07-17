import { Html, NextScript, Main, Head } from 'next/document'

const Document = () => {
  return <Html>
    <Head>
      <meta name="description" content="My personal blog" />
      <link rel="manifest" href="site.webmanifest" />
      <link rel="icon" type="image/ico" sizes="24x24" href="favicon.ico" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
}

export default Document;
