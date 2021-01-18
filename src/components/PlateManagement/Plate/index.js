import React from 'react';

import Banner from './Banner';
import ChefProfile from './ChefProfile';
import FoodInfo from './FoodInfo';
import PlateDetail from './PlateDetail';
import Reviews from './Reviews';

const Food = () => {
  return (
    <div>
      <Banner />
      <div className="container mx-6 sm:mx-6 md:mx-6 lg:mx-auto xl:mx-auto">
        <ChefProfile />
        <div className="mt-36">
          <FoodInfo />
          <PlateDetail />
          <Reviews />
        </div>
      </div>
    </div>
  );
};

export default Food;
