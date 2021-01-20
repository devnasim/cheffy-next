import React, { useState } from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { Button } from '../../../lib';
import Modal from '../../../lib/Modal';
import ReviewModal from './ReviewModal';
import StarRating from './StarRating';

const FoodInfo = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="mb-3">
      <div className="flex flex-row w-full justify-between">
        <h2 className="text-3xl font-medium pb-1">Dickey BBQ Pick</h2>
        <StarRating size={30} />
      </div>
      <h3 className="text-xl font-semibold text-pink-500 pb-1">$96.00</h3>
      <div>
        <div className="inline-flex pb-2">
          <span className="text-gray-500">
            <BiTimeFive />
          </span>
          <p className="font-medium text-gray-500 text-sm pl-2">15-20 min</p>
        </div>
      </div>
      <div className="pt-2 flex flex-row justify-between">
        <div>
          <div className="flex">
            <div className="pr-3">
              <Button name="Add Review" onClick={() => setIsActive(true)} />
            </div>
            <div className="pl-3 hidden sm:block md:block lg:block xl:block">
              <Button secondary name="Bookmark" />
            </div>
            <div className="pl-3 hidden sm:block md:block lg:block xl:block">
              <Button secondary name="Share" />
            </div>
          </div>
        </div>
        <div>
          <div className="pr-3">
            <Button name="Order now" />
          </div>
        </div>
      </div>
      <ReviewModal isActive={isActive} onCloseModal={() => setIsActive(false)} />
    </div>
  );
};

export default FoodInfo;
