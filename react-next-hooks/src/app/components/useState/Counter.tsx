"use client"
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increse = () => {
    setCount(count + 1);
  };
  const decrese = () => {
    if (count == 0) {
      alert("Count is already 0");
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <p className="bg-amber-500 text-3xl text-amber-950">Counter App</p>
      <p className="bg-amber-500 text-3xl text-amber-950">
        This is a Counter App.You can increse and decrese the count.
      </p>
      <button onClick={increse} className="border-4 border-indigo-500 rounded-md  bg-amber-950 h-12 w-30 text-amber-50">
        Increse
      </button>
      <p className="bg-amber-500 text-3xl text-amber-950">{count}</p>
      <button onClick={decrese} className="border-4 border-indigo-500 rounded-md  bg-amber-950 h-12 w-30 text-amber-50">
        Decrese
      </button>
    </div>
  );
}

export default Counter;
