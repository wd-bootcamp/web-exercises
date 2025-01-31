import "@/styles/globals.css";
import { FilterProvider } from '../context/FilterContext';
import { CartProvider } from '../context/CartContext';
export default function App({ Component, pageProps }) {
    // Two providers: Filter + Cart
    /*
    Currently, we nest <FilterProvider> and <CartProvider>.
    TODO: We want to remove both providers later and rely on a Zustand store instead.
    */
    return (
      <FilterProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </FilterProvider>
    );
}
