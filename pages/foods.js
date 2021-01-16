import React, { useCallback, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import Layout from '../src/layout';
import { platesAction } from '../src/store/plateReducer';
import { Foods } from '../src/components/FoodComp';

function FoodsPage() {
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
        <Foods />
      </div>
    </Layout>
  );
}

export default FoodsPage;
