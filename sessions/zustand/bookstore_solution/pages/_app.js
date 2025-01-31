import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    // No providers needed for Zustand
    return <Component {...pageProps} />;
}
