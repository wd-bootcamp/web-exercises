/* store/useAppStore.js */
import { create } from 'zustand';

const useAppStore = create((set) => ({
  // THEME
  theme: 'light',
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    })),

  // USER
  user: { name: 'Alice', isAuthenticated: false },
  login: (name) =>
    set(() => ({
      user: { name, isAuthenticated: true },
    })),
  logout: () =>
    set(() => ({
      user: { name: '', isAuthenticated: false },
    })),

  // CART
  items: [],
  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),
  removeItem: (index) =>
    set((state) => ({
      items: state.items.filter((_, i) => i !== index),
    })),
}));

export default useAppStore;
