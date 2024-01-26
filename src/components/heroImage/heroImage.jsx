import React from 'react';
import fitnessBannerImage from '/fitness-banner-image.jpg';

function HeroImage() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div className=' text-center bg-image'      >
        <img src={fitnessBannerImage} alt='Fitness Banner' height={200}></img>
      </div>
    </header>
  );
}

export default HeroImage;