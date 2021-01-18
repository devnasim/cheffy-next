import React from 'react';
import PropTypes from 'prop-types';
import { first, snakeCase, capitalize } from 'lodash';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import { FiTruck } from 'react-icons/fi';

const random = 'https://source.unsplash.com/random';

const PlateCard = ({ plate }) => {
  const imageUrl = plate && plate.PlateImages.length !== 0 ? first(plate.PlateImages).url : '';
  return (
    <div>
      <Link href={`/plate/${snakeCase(plate.name)}`}>
        <div className="mb-0 cursor-pointer	">
          <img
            className="w-full h-44 object-cover rounded shadow-sm"
            src={imageUrl}
            alt="food-images"
          />
        </div>
      </Link>
      <Link href={`/plate/${snakeCase(plate.name)}`}>
        <div className="pt-2 cursor-pointer	">
          <h2 className="text-lg font-medium capitalize">{capitalize(plate.name)}</h2>
        </div>
      </Link>
      <div className="flex flex-row justify-between content-center py-2">
        <div className="inline-flex">
          <span className="text-yellow-300">
            <AiFillStar />
          </span>
          <p className="font-medium text-gray-500 text-sm pl-2">4.5</p>
        </div>
        <div className="inline-flex">
          <span className="text-gray-500">
            <BiTimeFive />
          </span>
          <p className="font-medium text-gray-500 text-sm pl-2">15-20 min</p>
        </div>
        <div className="inline-flex">
          <span className="text-gray-500">
            <FiTruck />
          </span>
          <p className="font-medium text-gray-500 text-sm pl-2">Delivery</p>
        </div>
      </div>
    </div>
  );
};

PlateCard.defaultProps = {
  plate: {
    id: Math.random(),
    name: 'Chicken World Penge',
    PlateImages: [
      {
        url: random,
      },
    ],
  },
};
PlateCard.propTypes = {
  plate: PropTypes.object,
};

export default PlateCard;
