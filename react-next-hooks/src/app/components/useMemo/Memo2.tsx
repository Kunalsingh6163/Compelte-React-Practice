import React, { useState, useMemo } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const doubledCount = useMemo(() => {
    console.log('Calculating...'); 
    return count * 2;
  }, [count]); 

  return (
    <div>
      <p>Count: {count}</p>
      <p>Doubled Count: {doubledCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;