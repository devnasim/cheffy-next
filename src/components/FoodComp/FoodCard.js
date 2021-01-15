import React from 'react';
import { Card } from '../../lib';

const FoodCard = () => {
  return (
    <Card>
      <div className="mb-0">
        <img
          className="w-full h-52 object-cover rounded-t"
          src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="food-images"
        />
      </div>
      <div className="p-2">
        <h2 className="text-lg font-medium text-gray-700">Chicken World Penge</h2>
      </div>
    </Card>
  );
};

export default FoodCard;
