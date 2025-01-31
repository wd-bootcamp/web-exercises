/* context/FilterContext.js */
import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export function FilterProvider({ children }) {
  // State for searching/filtering books
  const [searchTerm, setSearchTerm] = useState('');

  console.log('FilterProvider rendered');

  return (
    <FilterContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  return useContext(FilterContext);
}
