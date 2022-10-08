import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, [])
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Profireiniger" />
        <title>Profireiniger Estera GmbH</title>
      </Head>
      <Component {...pageProps} />
    </>

  )
}

export default MyApp
