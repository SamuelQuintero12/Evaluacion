import React, { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useContext(ProductContext);

  if (typeof setSearchQuery !== 'function') {
    return <div className="searchbar-loading"></div>;
  }

  return (
    <div className="searchbar-container">
      <input
        type="search"
        aria-label="Buscar productos"
        placeholder="Buscar por nombre o categoría..."
        value={searchQuery || ''}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="searchbar-input"
      />
    </div>
  );
};

export default SearchBar;
