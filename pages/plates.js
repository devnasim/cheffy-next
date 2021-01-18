import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Layout from '../src/layout';
import { Pager } from '../src/lib';
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
      <Pager isTopPadded>
        <Plates />
      </Pager>
    </Layout>
  );
}

export default PlatesPage;
