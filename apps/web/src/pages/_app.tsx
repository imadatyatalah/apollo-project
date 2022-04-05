import type { AppProps } from "next/app";

import { ApolloProvider } from "@apollo/client";

import client from "../lib/apolloClient";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <main>
        <Component {...pageProps} />
      </main>
    </ApolloProvider>
  );
};

export default MyApp;
