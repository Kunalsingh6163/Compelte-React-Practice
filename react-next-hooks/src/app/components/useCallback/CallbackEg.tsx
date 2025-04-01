"use client"
import React, { useState, useCallback } from "react";

// Child component
// eslint-disable-next-line react/display-name
const Button = React.memo(({ handleClick }: { handleClick: () => void }) => {
  console.log("Button re-rendered");
  return <button onClick={handleClick}>Click Me</button>;
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  // Without useCallback, this function would be recreated on every render
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  // Without useCallback, this function would be recreated on every render we can see this commented code.
// const increment = () => {
//     setCount((prev) => prev + 1);
//   }

  return (
    <div>
      <h2>Count: {count}</h2>
      <Button handleClick={increment} />
      <button onClick={() => setValue(value + 1)}>Change Value</button>
      <p>Value: {value}</p>
    </div>
  );
};

export default ParentComponent;
