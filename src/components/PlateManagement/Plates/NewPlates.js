import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { times, dropRight } from 'lodash';

import { newPlatesAction } from '../../../store/plateSlice';
import PlateCard from './PlateCard';

const LoaderCard = () => <div className="animate-pulse bg-gray-200 h-60 rounded" />;

const Items = ({ newPlates, newStatus, newError }) => {
  const loading = newStatus === 'loading';

  const items = dropRight(newPlates, newPlates.length - 3);
  return (
    <div className="grid grid-cols-3 gap-8">
      {loading && times(3).map(() => <LoaderCard />)}
      {!loading && !newError && items.map((plate) => <PlateCard plate={plate} />)}
    </div>
  );
};

function NewPlates() {
  const { newPlates, newStatus, newError } = useSelector((state) => state.plateData);
  const dispatch = useDispatch();
  const fetchPlates = useCallback(async () => {
    await dispatch(newPlatesAction());
  }, [dispatch]);

  useEffect(() => {
    const controller = new AbortController();
    fetchPlates();
    return () => controller.abort();
  }, [fetchPlates]);

  return (
    <div className="pb-8">
      <h1 className="text-3xl font-bold py-5">New on Cheffy</h1>
      <div className="overflow-x-scroll w-full">
        <Items newPlates={newPlates} newStatus={newStatus} newError={newError} />
      </div>
    </div>
  );
}

Items.propTypes = {
  newPlates: PropTypes.array.isRequired,
  newStatus: PropTypes.string.isRequired,
  newError: PropTypes.any.isRequired,
};

export default NewPlates;
