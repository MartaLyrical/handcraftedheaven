import { Fragment } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import Layout from './components/Layout';
import "./global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Web Full Stack Project</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default MyApp;
