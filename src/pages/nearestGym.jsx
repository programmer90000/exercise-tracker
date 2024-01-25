import React from 'react';
import SearchForm from '../components/SearchForm';


const NearestGym = () => {
  const handleSearch = (searchTerm) => {
    console.log('Searching for:', searchTerm);
    
  };

  return (
    <div className="search-page">
      <h1>Find nearest gym</h1>
      <SearchForm onSearch={handleSearch} />
      
    </div>
  );
};
  
export default NearestGym;
