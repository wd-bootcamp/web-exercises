import "@/styles/globals.css";
import { ThemeProvider } from '@/context/ThemeContext';
import { UserProvider } from '@/context/UserContext';
import { CartProvider } from '@/context/CartContext';
export default function App({ Component, pageProps }) {
  // Multiple providers => "provider hell"
  return (
    <ThemeProvider>
      <UserProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </UserProvider>
    </ThemeProvider>
  );
}
