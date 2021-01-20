import React from 'react';
import Layout from '../../src/layout';
import { Pager } from '../../src/lib';

function ChefPage() {
  return (
    <Layout>
      <Pager isTopPadded>
        <h1 className="text-4xl">Chef Dashboard</h1>
      </Pager>
    </Layout>
  );
}

export default ChefPage;
