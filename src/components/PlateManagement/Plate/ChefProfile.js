import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import { FiTruck } from 'react-icons/fi';
import { HiLocationMarker } from 'react-icons/hi';

const random = 'https://source.unsplash.com/random';
const ChefProfile = () => {
  return (
    <div className="absolute flex flex-row top-80">
      <img
        className="rounded-md shadow-sm h-32 w-32 md:h-44 md:w-44 object-cover"
        src={random}
        alt="chef"
      />
      <div className="mt-14 md:mt-20 px-3 md:px-5 w-72">
        <h2 className="text-xl font-medium">Cheffy Bit</h2>
        <div className="md:flex md:flex-row justify-between content-center py-1 md:py-2">
          <div className="inline-flex mr-2">
            <span className="text-pink-500">
              <AiFillStar />
            </span>
            <p className="font-medium text-gray-500 text-xs md:text-sm pl-1 md:pl-2">4.5</p>
          </div>
          <div className="inline-flex mr-2">
            <span className="text-gray-500">
              <BiTimeFive />
            </span>
            <p className="font-medium text-gray-500 text-xs md:text-sm pl-1 md:pl-2">15-20 m</p>
          </div>
          <div className="inline-flex mr-2">
            <span className="text-gray-500">
              <FiTruck />
            </span>
            <p className="font-medium text-gray-500 text-xs md:text-sm pl-1 md:pl-2">Delivery</p>
          </div>
        </div>
        <div>
          <div className="inline-flex mr-2">
            <span className="text-pink-500">
              <HiLocationMarker />
            </span>
            <p className="font-medium text-gray-500 text-xs md:text-sm pl-1 md:pl-2">
              248 Brooklyn Street
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefProfile;
