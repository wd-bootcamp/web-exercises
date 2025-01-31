import { create } from 'zustand';

const useAppStore = create((set) => ({
  // FILTER SLICE
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),

  // CART SLICE
  cartItems: [],
  addToCart: (book) => set((state) => ({ cartItems: [...state.cartItems, book] })),
  removeFromCart: (index) => set((state) => ({
    cartItems: state.cartItems.filter((_, i) => i !== index),
  })),
}));

export default useAppStore;
