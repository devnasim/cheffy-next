import React, { useState } from 'react';
import { MdEuroSymbol } from 'react-icons/md';
import { Radio, ButtonCheckBox } from '../../../lib';

const sortOptions = [
  { key: 'pickup', label: 'Picked for you (default)' },
  { key: 'most-popular', label: 'Most popular' },
  { key: 'rating', label: 'Rating' },
  { key: 'delivery-time', label: 'Delivery time' },
];

const priceRangeOptions = [
  { key: 1, label: '$' },
  { key: 2, label: '$$' },
  { key: 3, label: '$$$' },
  { key: 4, label: '$$$$' },
  { key: 5, label: '$$$$$' },
];

const Filter = () => {
  const [sort, setSort] = useState('pickup');
  const [buttonChecked, setButtonChecked] = useState(false);
  const [priceRange, setPriceRange] = useState(null);

  const handleSort = (event) => {
    setSort(event.target.value);
    // console.log('sort', event.target.value);
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
        <h2 className="text-2xl font-medium py-2">Dietary</h2>
        <div className="flex flex-row justify-start flex-wrap">
          <div className="pb-2 pr-2 pt-2">
            <ButtonCheckBox
              icon={<MdEuroSymbol />}
              checked={buttonChecked}
              name="Halal"
              onChange={(value) => {
                setButtonChecked(value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="pb-4">
        <h2 className="text-2xl font-medium py-2">Price Range</h2>
        <div className="flex flex-row justify-start flex-wrap">
          {priceRangeOptions.map((item) => (
            <div className="pb-2 pr-2 pt-2" key={item.key}>
              <ButtonCheckBox
                checked={priceRange === item.key}
                name={item.label}
                onChange={(value) => {
                  setPriceRange(value ? item.key : null);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
