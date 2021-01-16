import React from 'react';

const Item = () => (
  <div className="flex flex-col justify-center content-center w-24 h-auto">
    <img
      className="object-cover rounded-full h-24 w-24"
      src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      alt="food-images"
    />
    <div className="py-2">
      <h2 className="font-medium text-gray-700 text-sm text-center">Asian</h2>
    </div>
  </div>
);

const Categories = () => {
  return (
    <div className="pb-2">
      <div className="grid grid-cols-5 gap-8">
        <Item />
      </div>
    </div>
  );
};

export default Categories;
