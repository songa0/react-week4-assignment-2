import React from 'react';

import Restaurant from './Restaurant';

const isEmpty = (arr) => arr.length === 0;

export default function Restaurants({ restaurants }) {
  if (isEmpty(restaurants)) {
    return (
      <div>
        입력된 레스토랑 정보가 없습니다.
      </div>
    );
  }

  return (
    <div>
      { restaurants.map(({
        id, name, category, address,
      }) => (
        <Restaurant
          key={id}
          name={name}
          category={category}
          address={address}
        />
      ))}
    </div>
  );
}
