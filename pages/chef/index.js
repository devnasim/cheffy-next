import React from 'react';

import Banner from '../../src/components/Chef/Banner';
import PlateCard from '../../src/components/PlateManagement/Plates/PlateCard';
import Layout from '../../src/layout';

function ChefPage() {
  return (
    <Layout hasBanner>
      <Banner />
      <div className="container mx-auto">
        <div className="flex flex-row space-x-8 py-8 border-b">
          <div className="text-base">Picked for you</div>
          <div className="text-base">Small Plates</div>
          <div className="text-base">Soup</div>
        </div>
        <div className="grid grid-cols-3 gap-6 py-14">
          <PlateCard>1</PlateCard>
          <PlateCard>1</PlateCard>
          <PlateCard>1</PlateCard>
          <PlateCard>1</PlateCard>
          <PlateCard>1</PlateCard>
          <PlateCard>1</PlateCard>
        </div>
      </div>
    </Layout>
  );
}

export default ChefPage;
