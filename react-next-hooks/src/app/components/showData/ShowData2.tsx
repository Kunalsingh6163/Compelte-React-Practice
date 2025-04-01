"use client";
import React, { useCallback, useEffect, useState } from "react";

function ShowData2() {
  const [data, setData] = useState<{ fact: string; length: number } | null>(
    null
  );

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(`https://catfact.ninja/fact`);
      const result = await response.json();
      console.log(result);
      setData({ fact: result.fact, length: result.length });
    } catch {
      console.log("Error");
    }
  }, []);
  //////fetching the updated  data using the useEffect
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  /////////////////////update blog button
  const HandleUpate = () => {
    fetchData();
  };

  return (
    <div>
      <h1>Show Data comp-2</h1>
      <p>Show Text:-{data?.fact}</p>
      <p>Text Length:-{data?.length}</p>
      <button onClick={HandleUpate}>Load More...</button>
    </div>
  );
}

export default ShowData2;
