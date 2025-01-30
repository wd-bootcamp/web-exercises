/* components/Header.js */
import React from 'react';
import useAppStore from '../store/useAppStore';

function Header() {
  // Subscribe only to 'theme'
  const theme = useAppStore((state) => state.theme);
  console.log('Header rendered');

  return (
    <header style={{ background: theme === 'light' ? '#ccc' : '#333' }}>
      <h1>My Store</h1>
    </header>
  );
}

export default Header;
