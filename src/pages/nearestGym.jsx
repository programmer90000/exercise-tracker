import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';

const NearestGym = () => {
  const [gymData, setGymData] = useState(null);

  const handleSearch = (data) => {

    // Update the state with the gymData received from the API call
    setGymData(data);
  };

  return (
    <div className="search-page">
      <h1>Find nearest gym</h1>
      <SearchForm onSearch={handleSearch} />
      
      {gymData && (
        <SearchResults results={gymData.features} />
      )}
    </div>
  );
};

export default NearestGym;
