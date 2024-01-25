import React, { useState } from 'react';
import NavTabs from '../navbar/navbar';
import Home from '../../pages/home';
import About from '../../pages/about';
import NearestGym from '../../pages/nearestGym';
import NewWorkout from '../../pages/newWorkout';
import Statistics from '../../pages/statistics';
import Footer from '../footer/footer';


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
        return <NewWorkout />;
        
    } else {
      return <Statistics />;
    }
  };

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer/>
    </div>
  );
}

export default PageRender;
