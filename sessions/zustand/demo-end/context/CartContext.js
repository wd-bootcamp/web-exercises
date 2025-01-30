/* context/CartContext.js */
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const addItem = (item) => setItems((prev) => [...prev, item]);
  const removeItem = (index) => setItems((prev) => prev.filter((_, i) => i !== index));
  console.log('CartProvider rendered');

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
