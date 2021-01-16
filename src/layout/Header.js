import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { Button } from '../lib';

const Header = () => {
  return (
    <header className="container mx-6 sm:mx-0 md:mx-0 lg:mx-auto xl:mx-auto">
      <div className="flex justify-between">
        <div className="flex-none py-4 flex lg:w-60 xl:w-72">
          <h1 className="text-4xl text-pink-600">Cheffy</h1>
        </div>

        <div className="flex-auto h-18 flex items-center justify-between px-4 sm:px-6 lg:mx-6 lg:px-0 xl:mx-8">
          <div className="hidden sm:hidden md:block lg:block xl:block">
            <button
              type="button"
              className="flex justify-between content-center bg-gray-100 p-2 px-3 rounded-full focus:outline-none hover:bg-gray-200 focus:ring-2 focus:ring-pink-600"
            >
              <HiLocationMarker size={20} /> <p className="text-sm px-2">Washington, DC</p>
            </button>
          </div>
          <div>
            <div className="flex-auto flex justify-between">
              <div className="pr-3">
                <Button name="Login" />
              </div>
              <div className="pl-3">
                <Button secondary name="Signup" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
