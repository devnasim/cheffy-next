import React from 'react';

import Layout from '../src/layout';
import BrandGuideLines from '../src/components/BrandGuideLines';

function FoodsPage() {
  return (
    <Layout>
      <div className="py-6">
        <BrandGuideLines />
      </div>
    </Layout>
  );
}

export default FoodsPage;
