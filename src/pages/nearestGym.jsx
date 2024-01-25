import React from 'react';
import SearchForm from '../components/SearchForm';


const NearestGym = () => {
  const handleSearch = (gymData) => {
    console.log('Searching for:', gymData);
    
  };

  return (
    <div className="search-page">
      <h1>Find nearest gym</h1>
      <SearchForm onSearch={handleSearch} />
      
    </div>
  );
};
  
export default NearestGym;
