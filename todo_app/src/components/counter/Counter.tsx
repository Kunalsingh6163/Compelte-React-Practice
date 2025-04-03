import { useState,useEffect  } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    document.title = `You clicked ${count} times`
  },[count]);

  return (
    <div>
      <h3>Counter App.</h3>
      <p className=" text-[18px]">Count: {count}</p>
      <div className="flex item-center">
        <button onClick={() => setCount(count + 1)} className="">
          Increment
        </button>
        <button onClick={() => setCount(count > 0 ? count - 1 : count )}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
