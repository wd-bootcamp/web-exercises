/* components/FilterBar.js */
import React, {useRef} from 'react';
import useAppStore from '../store/useAppStore';

function FilterBar() {
  // Use Zustand
  const setSearchTerm = useAppStore((state) => state.setSearchTerm);

  // Use ref to prevent re-renders while typing
  const inputRef = useRef(null);
  const handleSearch = () => {
    setSearchTerm(inputRef.current.value);
  };

  console.log('FilterBar rendered');

  return (
    <div style={{ marginTop: '20px' }}>
      <input
        type="text"
        placeholder="Search books..."
        ref={inputRef} // Uncontrolled input
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default FilterBar;