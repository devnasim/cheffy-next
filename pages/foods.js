import React from 'react';

import Layout from '../src/layout';
import { Foods } from '../src/components/FoodComp';

function FoodsPage() {
  return (
    <Layout>
      <div className="py-6">
        <Foods />
      </div>
    </Layout>
  );
}

export default FoodsPage;
