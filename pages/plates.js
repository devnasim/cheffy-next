import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Layout from '../src/layout';
import { platesAction } from '../src/store/plateSlice';
import { Plates } from '../src/components/PlateManagement';

function PlatesPage() {
  const dispatch = useDispatch();
  const fetchPlates = useCallback(async () => {
    await dispatch(platesAction());
  }, [dispatch]);

  useEffect(() => {
    const controller = new AbortController();
    fetchPlates();
    return () => controller.abort();
  }, [fetchPlates]);

  return (
    <Layout>
      <div className="py-6">
        <Plates />
      </div>
    </Layout>
  );
}

export default PlatesPage;
