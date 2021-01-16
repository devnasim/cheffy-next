import React from 'react';
import Layout from '../../src/layout';
import { Plate } from '../../src/components/PlateManagement';

function FoodPage() {
  return (
    <Layout hasBanner>
      <div className="py-6">
        <Plate />
      </div>
    </Layout>
  );
}

export default FoodPage;
