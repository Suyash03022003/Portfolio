import "@/styles/globals.css";
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Welcome!</title>
      </Head>
      <Component {...pageProps} /> 
    </>
  );
}
