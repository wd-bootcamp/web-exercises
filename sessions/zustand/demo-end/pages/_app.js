import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  // Multiple providers => "provider hell"
  return (
    // By default, Zustand doesn't need a provider
    <Component {...pageProps} />
  );
}
