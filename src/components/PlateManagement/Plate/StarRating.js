import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const StarRating = () => {
  return (
    <div className="inline-flex">
      <span className="text-pink-500 mr-2">
        <AiFillStar />
      </span>
      <span className="text-gray-400 mr-2">
        <AiFillStar />
      </span>
      <span className="text-gray-400 mr-2">
        <AiFillStar />
      </span>
      <span className="text-gray-400 mr-2">
        <AiFillStar />
      </span>
      <span className="text-gray-400 mr-2">
        <AiFillStar />
      </span>
    </div>
  );
};

export default StarRating;
