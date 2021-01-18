import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { platesAction } from '../store/plateSlice';

function useGetPlates({ params }) {
  const { plates, status, error } = useSelector((state) => state.plateData);
  const dispatch = useDispatch();
  const fetchPlates = useCallback(async () => {
    await dispatch(platesAction({ ...params }));
  }, [dispatch, params]);

  useEffect(() => {
    const controller = new AbortController();
    fetchPlates();
    return () => controller.abort();
  }, [fetchPlates]);

  return [plates, error, status];
}

export default useGetPlates;
