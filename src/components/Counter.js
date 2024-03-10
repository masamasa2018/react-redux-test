import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/store';

const Counter = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter</h2>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;