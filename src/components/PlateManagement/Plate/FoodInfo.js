import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { Button } from '../../../lib';

const FoodInfo = () => {
  return (
    <div className="">
      <h2 className="text-3xl font-medium pb-1">Dickey BBQ Pick</h2>
      <h3 className="text-xl font-semibold text-pink-500 pb-1">$96.00</h3>
      <div>
        <div className="inline-flex pb-2">
          <span className="text-gray-500">
            <BiTimeFive />
          </span>
          <p className="font-medium text-gray-500 text-sm pl-2">15-20 min</p>
        </div>
      </div>
      <div className="pt-2 w-56">
        <Button name="Order now" isFullWidth />
      </div>
    </div>
  );
};

export default FoodInfo;
