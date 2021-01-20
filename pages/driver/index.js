import React from 'react';
import Layout from '../../src/layout';
import { Pager } from '../../src/lib';

function DriverPage() {
  return (
    <Layout>
      <Pager isTopPadded>
        <h1 className="text-4xl">Driver Dashboard</h1>
      </Pager>
    </Layout>
  );
}

export default DriverPage;
