/* components/Cart.js */
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

function Cart() {
  const { items, addItem, removeItem } = useCart();
  const [inputItem, setInputItem] = useState('');
  console.log('Cart rendered');

  const handleAddItem = () => {
    if (inputItem) {
      addItem(inputItem);
      setInputItem('');
    }
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Cart</h2>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            {item} <button onClick={() => removeItem(idx)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add an item"
        value={inputItem}
        onChange={(e) => setInputItem(e.target.value)}
      />
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
}

export default Cart;
