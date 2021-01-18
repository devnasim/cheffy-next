import React from 'react';
import { useSelector } from 'react-redux';
import { times } from 'lodash';
import Filter from './Filter';
import PlateCard from './PlateCard';
import Categories from './Categories';
// import PopularPlates from './PopularPlates';
import NewPlates from './NewPlates';

const LoaderCard = () => <div className="animate-pulse bg-gray-200 h-60 rounded" />;

const Plates = () => {
  const { plates, status, error } = useSelector((state) => state.plateData);
  const loading = status === 'loading';

  return (
    <div>
      <div className="hidden sm:block md:block lg:block xl:block">
        <Categories />
        <NewPlates />

        <div className="pb-10">
          <h1 className="text-3xl font-bold py-5">Popular Near You</h1>
          <div className="grid grid-cols-3 gap-8">
            <PlateCard>1</PlateCard>
            <PlateCard>1</PlateCard>
            <PlateCard>1</PlateCard>
          </div>
        </div>

        {/* <PopularPlates/> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-0 lg:grid-cols-4 gap-0 md:gap-4 sm:gap-4 lg:gap-4 xl:gap-4">
        <div className="hidden sm:hidden md:block lg:block xl:block sticky top-0">
          <Filter />
        </div>
        <div className="col-span-3 sm:col-span-3 md:col-span-2 lg:col-span-3 xl:col-span-3">
          <div className=" grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {loading && times(8).map(() => <LoaderCard />)}
            {!loading && !error && plates.map((plate) => <PlateCard plate={plate} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plates;
