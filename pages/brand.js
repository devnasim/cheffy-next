import React from 'react';

import Layout from '../src/layout';
import { Pager } from '../src/lib';
import BrandGuideLines from '../src/components/BrandGuideLines';

function FoodsPage() {
  return (
    <Layout>
      <Pager>
        <BrandGuideLines />
      </Pager>
    </Layout>
  );
}

export default FoodsPage;
