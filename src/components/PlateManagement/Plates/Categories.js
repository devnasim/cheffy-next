import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { times, dropRight } from 'lodash';

import { categoriesAction } from '../../../store/plateSlice';

const LoaderCard = () => <div className="animate-pulse rounded-full h-24 w-24 bg-gray-200" />;

const Items = ({ categories, categoryStatus, categoryError }) => {
  const loading = categoryStatus === 'loading';
  const items = dropRight(categories, categories.length - 8);
  return (
    <div className="grid grid-cols-8">
      {loading && times(8).map(() => <LoaderCard />)}
      {!loading &&
        !categoryError &&
        items.map((category) => (
          <div
            className="flex flex-col justify-center content-center w-24 h-auto"
            key={category.id}
          >
            <img
              className="object-cover rounded-full h-24 w-24"
              src={category.url}
              alt={category.name}
            />
            <div className="py-2">
              <h2 className="font-medium text-gray-700 text-sm text-center">{category.name}</h2>
            </div>
          </div>
        ))}
    </div>
  );
};

const Categories = () => {
  const { categories, categoryStatus, categoryError } = useSelector((state) => state.plateData);
  const dispatch = useDispatch();
  const fetchPlates = useCallback(async () => {
    await dispatch(categoriesAction({ page: 1, pageSize: 8 }));
  }, [dispatch]);

  useEffect(() => {
    const controller = new AbortController();
    fetchPlates();
    return () => controller.abort();
  }, [fetchPlates]);

  return (
    <div className="pb-2">
      <Items
        categories={categories}
        categoryStatus={categoryStatus}
        categoryError={categoryError}
      />
    </div>
  );
};

Items.propTypes = {
  categories: PropTypes.array.isRequired,
  categoryStatus: PropTypes.string.isRequired,
  categoryError: PropTypes.any.isRequired,
};

export default Categories;
