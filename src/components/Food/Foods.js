import React from 'react';
import { Card } from '../../lib';
import Filter from './Filter';
import FoodCard from './FoodCard';

const Foods = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div>
        <Filter />
      </div>
      <div className="col-span-3">
        <div className=" grid grid-cols-3 gap-6">
          <FoodCard>1</FoodCard>
          <FoodCard>1</FoodCard>
          <FoodCard>1</FoodCard>
          <FoodCard>1</FoodCard>
          <FoodCard>1</FoodCard>
          <FoodCard>1</FoodCard>
        </div>
      </div>
    </div>
  );
};

export default Foods;
