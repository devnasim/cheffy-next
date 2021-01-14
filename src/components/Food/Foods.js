import React from 'react';
import { Card } from '../../lib';
import Filter from './Filter';

const Foods = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div>
        <Filter />
      </div>
      <div className="col-span-3">
        <div className=" grid grid-cols-3 gap-4">
          <Card>1</Card>
          <Card>1</Card>
          <Card>1</Card>
          <Card>1</Card>
          <Card>1</Card>
          <Card>1</Card>
        </div>
      </div>
    </div>
  );
};

export default Foods;
