"use client";
import React, { useEffect, useState, useCallback } from "react";

function ShowData() {
  const [data, setData] = useState<{ fact: string; length: number } | null>(
    null
  );

  const dataAll = useCallback(async () => {
    try {
      const response = await fetch(`https://catfact.ninja/fact`);
      const result = await response.json();
      console.log("🚀 ~ dataAll ~ result:", result);
      setData({
        fact: result.fact,
        length: result.length,
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    dataAll();
  }, [dataAll]);

  const handleLoad = () => {
    dataAll();
  };

  return (
    <div>
      <h1>My First React App</h1>
      <p>my data fact:- {data?.fact}</p>
      <p>my data length:- {data?.length}</p>
      <button onClick={handleLoad}>Load More...</button>
    </div>
  );
}

export default ShowData;
