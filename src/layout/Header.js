import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { Button, Pager } from '../lib';

const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow-sm z-30">
      <Pager>
        <div className="block sm:hidden md:hidden lg:hidden xl:hidden">
          <div className="flex justify-center">
            <div className="flex-none py-4 flex lg:w-60 xl:w-72">
              <h1 className="text-4xl text-pink-600">Cheffy</h1>
            </div>
          </div>
        </div>
        <div className="hidden sm:block md:block lg:block xl:block">
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
                  <div className="pl-3 hidden sm:block md:block lg:block xl:block">
                    <Button secondary name="Signup" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Pager>
    </header>
  );
};

export default Header;
