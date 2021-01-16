import React, { useState } from 'react';
import { MdEuroSymbol } from 'react-icons/md';
import { Radio, Checkbox, ButtonCheckBox } from '../../../lib';

const sortOptions = [
  { key: 'pickup', label: 'Picked for you (default)' },
  { key: 'most-popular', label: 'Most popular' },
  { key: 'rating', label: 'Rating' },
  { key: 'delivery-time', label: 'Delivery time' },
];

const Filter = () => {
  const [sort, setSort] = useState('pickup');
  const [hello, setHello] = useState(true);
  const [buttonChecked, setButtonChecked] = useState('veg');

  const handleSort = (event) => {
    setSort(event.target.value);
    console.log('sort', event.target.value);
  };

  return (
    <div>
      <div className="pb-4">
        <h2 className="text-2xl font-medium py-2">Sort</h2>
        <div className="flex flex-col">
          {sortOptions.map((item) => (
            <Radio
              name="sort"
              id={item.key}
              label={item.label}
              value={sort}
              onChange={handleSort}
            />
          ))}
        </div>
      </div>
      <div className="pb-4">
        <h2 className="text-2xl font-medium py-2">Sort</h2>
        <div className="flex flex-col">
          <Checkbox
            value={hello}
            onChange={(value) => {
              setHello(value);
            }}
          />
        </div>
      </div>
      <div className="pb-4">
        <h2 className="text-2xl font-medium py-2">Sort</h2>
        <div className="flex flex-row justify-start flex-wrap">
          <div className="p-2">
            <ButtonCheckBox
              icon={<MdEuroSymbol />}
              checked={buttonChecked}
              onChange={(value) => {
                setButtonChecked(value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="pb-4">
        <h2 className="text-2xl font-medium py-2">Sort</h2>
        <div className="flex flex-row justify-start flex-wrap">
          <div className="p-2">
            <ButtonCheckBox
              checked={buttonChecked}
              name="$"
              onChange={(value) => {
                setButtonChecked(value);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
