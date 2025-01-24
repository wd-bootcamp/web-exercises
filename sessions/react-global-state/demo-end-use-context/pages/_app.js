import { useState } from "react";
import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { AnimalProvider } from '../contexts/AnimalContext';


export default function App({ Component, pageProps }) {
  return (
    <AnimalProvider>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
        />
      </Layout>
    </AnimalProvider>
  );
}
