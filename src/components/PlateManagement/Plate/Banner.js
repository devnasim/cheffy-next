import React from 'react';

const Banner = () => {
  return (
    <div className="w-full overflow-hidden shadow-lg relative">
      <img
        className="w-full h-72 object-cover"
        src="https://images.unsplash.com/photo-1447078806655-40579c2520d6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
        alt="Flower and sky"
      />
    </div>
  );
};

export default Banner;
