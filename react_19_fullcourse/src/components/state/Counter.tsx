import '../../App.css'
import { useState } from "react";

function Counter() {
  // Declare a state variable `count` and a state updater function `setCount`
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const increment = () => {
    setCount((prev)=> prev + 1);
  };

  const decrement = () =>{
    setCount((prev) => prev > 0 ? prev - 1  : prev = 0);
  }

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;