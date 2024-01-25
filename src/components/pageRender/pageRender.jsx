import React, { useState } from 'react';
import NavTabs from '../navbar/navbar';
import Home from '../../pages/home';
import About from '../../pages/about';
import NearestGym from '../../pages/nearestGym';
import GetNewWorkout from '../../pages/newWorkout';
import Statistics from '../../pages/statistics';


function PageRender() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (currentPage === 'home') {
      return <Home />;
    } else if (currentPage === 'about') {
      return <About />;
    } else if (currentPage === 'nearestGym') {
      return <NearestGym />;
    } else if (currentPage === 'newWorkout') {
        return <GetNewWorkout />;
        
    } else {
      return <Statistics />;
    }
  };

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

export default PageRender;
