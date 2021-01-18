import React from 'react';

import Banner from './Banner';
import ChefProfile from './ChefProfile';
import FoodInfo from './FoodInfo';
import Reviews from './Reviews';

const Food = () => {
  return (
    <div>
      <Banner />
      <div className="container mx-6 sm:mx-6 md:mx-6 lg:mx-auto xl:mx-auto">
        <ChefProfile />
        <div className="mt-36">
          <FoodInfo />
          <h2 className="text-2xl font-semibold pb-1 pt-5">The Plate</h2>
          <p className="text-gray-500 font-normal pb-8">
            Fish is healthy and easy to bake, grill, or fry. Find hundreds of fish recipes for
            tilapia, cod, salmon, tuna, and more. Fish is healthy and easy to bake, grill, or fry.
            Find hundreds of fish recipes for tilapia, cod, salmon, tuna, and more Fish is healthy
            and easy to bake, grill, or fry. Find hundreds of fish recipes for tilapia, cod, salmon,
            tuna, and more Fish is healthy and easy to bake, grill, or fry. Find hundreds of fish
            recipes for tilapia, cod, salmon, tuna, and more. Fish is healthy and easy to bake,
            grill, or fry. Find hundreds of fish recipes for tilapia, cod, salmon, tuna, and more
            Fish is healthy and easy to bake, grill, or fry. Find hundreds of fish recipes for
            tilapia, cod, salmon, tuna, and more Fish is healthy and easy to bake, grill, or fry.
            Find hundreds of fish recipes for tilapia, cod, salmon, tuna, and more. Fish is healthy
            and easy to bake, grill, or fry. Find hundreds of fish recipes for tilapia, cod, salmon,
            tuna, and more Fish is healthy and easy to bake, grill, or fry. Find hundreds of fish
            recipes for tilapia, cod, salmon, tuna, and more
          </p>
          <Reviews />
        </div>
      </div>
    </div>
  );
};

export default Food;
