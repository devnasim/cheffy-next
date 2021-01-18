import React from 'react';
import { Pager } from '../../../lib';
import Banner from './Banner';
import ChefProfile from './ChefProfile';
import FoodInfo from './FoodInfo';

const Food = () => {
  return (
    <div>
      <Banner />
      <Pager>
        <ChefProfile />
        <div className="mt-36">
          <FoodInfo />
          <h2 className="text-2xl font-semibold pb-1">Details</h2>
          <h2 className="text-2xl font-semibold pb-1">Review</h2>
        </div>
      </Pager>
    </div>
  );
};

export default Food;
