import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Counter App.</h3>
      <p className=" text-[18px]">Count: {count}</p>
      <div className="flex item-center">
        <button onClick={() => setCount(count + 1)} className="">
          Increment
        </button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
