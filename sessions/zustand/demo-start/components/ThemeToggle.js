/* components/ThemeToggle.js */
import React from 'react';
import { useTheme } from '../context/ThemeContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  console.log('ThemeToggle rendered');

  return (
    <button onClick={toggleTheme}>
      Current theme: {theme} (click to toggle)
    </button>
  );
}

export default ThemeToggle;
