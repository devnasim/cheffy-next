import React from 'react';

import StarRating from './StarRating';

const random = 'https://source.unsplash.com/random';

const Review = () => {
  return (
    <div className="p-6 w-1/3 bg-white flex items-start space-x-4">
      <div className="flex-shrink-0">
        <img className="h-12 w-12 rounded-full" src={random} alt="ChitChat Logo" />
      </div>
      <div>
        <div className="text-xl font-light text-black">Roy Cooper</div>
        <div className="flex items-center">
          <StarRating />
          <div className="text-sm font-light">April 4, 2020</div>
        </div>

        <p className="text-gray-500 text-sm font-light mt-3">
          On my recent trip to Ludhiana, I came across this place. This place is an exemplary place
          for mouth-wateringly good biryanis, kebas and curries. I recently ordered some dishes like
        </p>
      </div>
    </div>
  );
};

export default Review;
