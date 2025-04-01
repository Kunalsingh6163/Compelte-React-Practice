"use client";
import React, { useContext } from "react";
import { createCounter } from "../crateContext/CounterContext";

const CounterApp = () => {
  const counter = useContext(createCounter);

  if (!counter) {
    return <p>CounterProvider is missing!</p>; // Prevents errors if provider is not wrapped
  }

  const { count, increse, decrese } = counter;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-bold">Counter: {count}</h1>
      <div className="flex gap-4">
        <button onClick={increse} className="px-4 py-2 bg-green-500 text-white rounded">Increase</button>
        <button onClick={decrese} className="px-4 py-2 bg-red-500 text-white rounded">Decrease</button>
      </div>
    </div>
  );
};

export default CounterApp;
