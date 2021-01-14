import React from 'react';

import { Foods } from '../../src/components/Food';

function FoodPage() {
  return (
    <div>
      <div>
        <h1 className="text-3xl text-primary py-20 text-center uppercase">
          Welcome to FoodPage Layout
        </h1>
        <Foods />
      </div>
    </div>
  );
}

export default FoodPage;
