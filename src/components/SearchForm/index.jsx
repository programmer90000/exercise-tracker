import React, { useState } from 'react';
import './style.css';

const SearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-form">
      <input
        type="text"
        placeholder="Enter your city here"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button>Search</button>
    </div>
  );
};

export default SearchForm;

