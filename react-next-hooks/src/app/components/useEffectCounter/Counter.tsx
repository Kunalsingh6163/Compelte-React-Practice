"use client"
import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `my title value ${count}`;
  });
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  );
}
