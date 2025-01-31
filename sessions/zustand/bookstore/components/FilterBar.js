/* components/FilterBar.js */
import React from 'react';
import { useFilter } from '../context/FilterContext';

function FilterBar() {
  // Get searchTerm and setSearchTerm from FilterContext
  const { searchTerm, setSearchTerm } = useFilter();

  const handleChange = (e) => {
    setSearchTerm(e.target.value); // Updates context state
  };

  console.log('FilterBar rendered');

  return (
    <div style={{ marginTop: '20px' }}>
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={handleChange} // Causes re-renders on every keystroke
      />
    </div>
  );
}

export default FilterBar;