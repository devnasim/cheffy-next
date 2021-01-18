import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { times } from 'lodash';

import { popularPlatesAction } from '../../../store/plateSlice';
import PlateCard from './PlateCard';

const LoaderCard = () => <div className="animate-pulse bg-gray-200 h-60 rounded" />;

const Items = ({ popularPlates, popularStatus, popularError }) => {
  const loading = popularStatus === 'loading';
  return (
    <div className="grid grid-cols-3 gap-8">
      {loading && times(3).map(() => <LoaderCard />)}
      {!loading && !popularError && popularPlates.map((plate) => <PlateCard plate={plate} />)}
    </div>
  );
};

function PopularPlates() {
  const { popularPlates, popularStatus, popularError } = useSelector((state) => state.plateData);
  const dispatch = useDispatch();
  const fetchPlates = useCallback(async () => {
    await dispatch(popularPlatesAction());
  }, [dispatch]);

  useEffect(() => {
    const controller = new AbortController();
    fetchPlates();
    return () => controller.abort();
  }, [fetchPlates]);

  return (
    <div className="pb-8">
      <h1 className="text-3xl font-bold py-5">Popular Near You</h1>
      <div className="overflow-x-scroll w-full">
        <Items
          popularPlates={popularPlates}
          popularStatus={popularStatus}
          popularError={popularError}
        />
      </div>
    </div>
  );
}

Items.propTypes = {
  popularPlates: PropTypes.array.isRequired,
  popularStatus: PropTypes.string.isRequired,
  popularError: PropTypes.any.isRequired,
};

export default PopularPlates;
