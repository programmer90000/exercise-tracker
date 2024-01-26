import React from 'react';

function HeroImage() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div className=' text-center bg-image'      >
        <img src='./public/fitness-banner-image.jpg' alt='Fitness Banner' height={200}></img>
      </div>
    </header>
  );
}

export default HeroImage;