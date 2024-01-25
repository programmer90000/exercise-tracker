import React from 'react';
import './style.module.css';

const SearchResults = ({ results }) => {
  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result.properties.name} - {result.properties.address_line2}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;