import React, { useState } from 'react';
import './style.css';

const SearchForm = ({ onSearch }) => {
  return (
    <div className="search-form">
      <input
        type="text"
        placeholder="Enter your city here"
      />
      <button>Search</button>
    </div>
  );
};

export default SearchForm;

