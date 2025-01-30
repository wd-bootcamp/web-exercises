/* context/GlobalContext.js */
import React, { createContext, useState, useContext } from 'react';

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  // THEME
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // USER
  const [user, setUser] = useState({ name: 'Alice', isAuthenticated: false });
  const login = (name) => setUser({ name, isAuthenticated: true });
  const logout = () => setUser({ name: '', isAuthenticated: false });

  // CART
  const [items, setItems] = useState([]);
  const addItem = (item) => setItems((prev) => [...prev, item]);
  const removeItem = (index) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  console.log('GlobalProvider rendered');

  return (
    <GlobalContext.Provider
      value={{
        // theme
        theme,
        toggleTheme,
        // user
        user,
        login,
        logout,
        // cart
        items,
        addItem,
        removeItem,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

// Custom hook for convenience
export function useGlobalContext() {
  return useContext(GlobalContext);
}
