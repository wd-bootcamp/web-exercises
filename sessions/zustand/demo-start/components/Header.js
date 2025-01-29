/* components/Header.js */
import React from 'react';
import { useTheme } from '../context/ThemeContext';

function Header() {
  const { theme } = useTheme();
  console.log('Header rendered');

  return (
    <header style={{ background: theme === 'light' ? '#ccc' : '#333' }}>
      <h1>My Store</h1>
    </header>
  );
}

export default Header;
