import React, { useRef } from 'react';
import useAppStore from '../store/useAppStore';

function Cart() {
  // Subscribe to Zustand store slices
  const items = useAppStore((state) => state.items);
  const addItem = useAppStore((state) => state.addItem);
  const removeItem = useAppStore((state) => state.removeItem);

  console.log('Cart rendered');

  // Use a ref for the input so typing doesn't cause re-renders
  const inputRef = useRef('');

  const handleAddItem = () => {
    const itemText = inputRef.current.value;
    if (itemText) {
      addItem(itemText);
      // Clear the input manually since it's uncontrolled
      inputRef.current.value = '';
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
        ref={inputRef} // Uncontrolled input
      />
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
}

export default Cart;
