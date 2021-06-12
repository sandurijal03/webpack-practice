import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>{count}</h3>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        increment
      </button>
    </>
  );
};

export default Counter;
