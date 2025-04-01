"use client";
import React, { useMemo, useState } from "react";

function MemoExample3() {
  const [data, setData] = useState(0);

  const doublecount = useMemo(()=>{
    return data * 10;
  },[data]) 

  return (
    <div>
      <h1>React Memo Example</h1>
      <p>{data}</p>
      <p>{doublecount}</p>
      <button onClick={() => setData(data + 1)}>Increment</button>
    </div>
  );
}

export default MemoExample3;
