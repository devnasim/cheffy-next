import React from 'react';

import Banner from './Banner';
import ChefProfile from './ChefProfile';
import FoodInfo from './FoodInfo';

const Food = () => {
  return (
    <div>
      <Banner />
      <div className="container mx-6 sm:mx-6 md:mx-6 lg:mx-auto xl:mx-auto">
        <ChefProfile />
        <div className="mt-36">
          <FoodInfo />
          <h2 className="text-2xl font-semibold pb-1">Details</h2>
          <h2 className="text-2xl font-semibold pb-1">Review</h2>
        </div>
      </div>
    </div>
  );
};

export default Food;
