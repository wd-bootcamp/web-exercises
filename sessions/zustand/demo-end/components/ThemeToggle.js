/* components/ThemeToggle.js */
import React from 'react';
import useAppStore from '../store/useAppStore';

function ThemeToggle() {
  // Subscribe to 'theme' and 'toggleTheme'
  const theme = useAppStore((state) => state.theme);
  const toggleTheme = useAppStore((state) => state.toggleTheme);
  console.log('ThemeToggle rendered');

  return (
    <button onClick={toggleTheme}>
      Current theme: {theme} (click to toggle)
    </button>
  );
}

export default ThemeToggle;
