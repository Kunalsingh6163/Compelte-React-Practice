"use client";

import React, { useState } from "react";

export default function ShowDataClient({ initialData }: { initialData: { fact: string; length: number } }) {
  const [data, setData] = useState(initialData);

  const HandleUpdate = async () => {
    try {
      const response = await fetch(`https://catfact.ninja/fact`);
      const result = await response.json();
      setData({ fact: result.fact, length: result.length });
    } catch {
      console.log("Error");
    }
  };

  return (
    <div>
      <h1>Show Data Component</h1>
      <p>Show Text: {data.fact}</p>
      <p>Text Length: {data.length}</p>
      <button onClick={HandleUpdate}>Load More...</button>
    </div>
  );
}
