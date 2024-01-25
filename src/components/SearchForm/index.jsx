import React, { useState, useEffect } from 'react';
import './style.module.css';

const SearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationData, setLocationData] = useState(null);
  const [gymData, setGymData] = useState(null);
  const locationAPIkey = '07c6e2c39b20420cb9827bf457518cbc';
  const numberOfResults = 10;

  const handleSearch = () => {
    if (searchTerm !== '') {
      // First API call to get location data
      const locationQueryURL = `https://api.geoapify.com/v1/geocode/search?text=${searchTerm}&format=json&apiKey=${locationAPIkey}`;
      
      fetch(locationQueryURL)
        .then(response => response.json())
        .then(data => {
          setLocationData(data);
        })
        .catch(error => {
          console.error('Error making location API call:', error.message);
        });
    }
  };

  useEffect(() => {
    if (locationData && locationData.results && locationData.results.length > 0) {
      // Extract place_id from the first result of the location data
      const placeId = locationData.results[0].place_id;

      // Second API call to get gyms data using place_id in order to get the gym data
      const gymQueryURL = `https://api.geoapify.com/v2/places?categories=sport.fitness&filter=place:${placeId}&limit=${numberOfResults}&apiKey=${locationAPIkey}`;
      
      fetch(gymQueryURL)
        .then(response => response.json())
        .then(data => {
          setGymData(data);
          onSearch(data); 
        })
        .catch(error => {
          console.error('Error making gym API call:', error.message);
        });
    }
  }, [locationData, numberOfResults, onSearch]);

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
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchForm;

