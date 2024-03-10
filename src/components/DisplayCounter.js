import React from 'react';
import { useSelector } from 'react-redux';

const DisplayCounter = () => {
  const count = useSelector(state => state.counter.count);

  return (
    <div>
      <h3>Display Counter</h3>
      <p>Count: {count}</p>
    </div>
  );
};

export default DisplayCounter;