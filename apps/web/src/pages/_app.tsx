import Head from "next/head";

import type { AppProps } from "next/app";

import { ApolloProvider } from "@apollo/client";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import client from "@/lib/apolloClient";
import createEmotionCache from "@/lib/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ApolloProvider client={client}>
        <CacheProvider value={emotionCache}>
          <CssBaseline />

          <main>
            <Component {...pageProps} />
          </main>
        </CacheProvider>
      </ApolloProvider>
    </>
  );
};

export default MyApp;
