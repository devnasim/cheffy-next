import React from 'react';
import PropTypes from 'prop-types';
import { first } from 'lodash';
import { Card } from '../../../lib';

const random = 'https://source.unsplash.com/random';

const FoodCard = ({ plate }) => {
  const imageUrl = plate && plate.PlateImages.length !== 0 ? first(plate.PlateImages).url : '';
  return (
    <Card>
      <div className="mb-0">
        <img className="w-full h-44 object-cover rounded-t" src={imageUrl} alt="food-images" />
      </div>
      <div className="p-2">
        <h2 className="text-lg font-medium text-gray-700">{plate.name}</h2>
      </div>
    </Card>
  );
};

FoodCard.defaultProps = {
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
FoodCard.propTypes = {
  plate: PropTypes.object,
};

export default FoodCard;
