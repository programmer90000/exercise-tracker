import React from "react";
import "./style.css";

function SearchResults(results) {
  return (
    <ul className="list-group search-results">
      {results.map((result, index) => (
          <li key={index}>{result.name}</li>
        ))}
    </ul>
  );
}

export default SearchResults;