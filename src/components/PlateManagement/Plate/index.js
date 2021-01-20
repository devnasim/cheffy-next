import React from 'react';
import { Pager } from '../../../lib';
import Banner from './Banner';
import ChefProfile from './ChefProfile';
import FoodInfo from './FoodInfo';
import PlateDetail from './PlateDetail';
import Reviews from './Reviews';

const Food = () => {
  return (
    <div>
      <Banner />
      <Pager>
        <ChefProfile />
        <div className="mt-36">
          <FoodInfo />
          <div className="md:flex flex-row">
            <div className="w-full">
              <PlateDetail />
              <Reviews />
            </div>
            <div className="w-4/12" />
          </div>
        </div>
      </Pager>
    </div>
  );
};

export default Food;
