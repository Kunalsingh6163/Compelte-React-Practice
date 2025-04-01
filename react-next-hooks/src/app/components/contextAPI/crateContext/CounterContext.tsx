'use client'
import React, { ReactNode } from "react";
import { createContext, useState } from "react";

interface CounterType {
  count: number;
  increse: () => void;
  decrese: () => void;
}

export const createCounter = createContext<CounterType | undefined>(undefined);

export function CounterContext({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);
  const increse = () => setCount((prev) => prev + 1);
  const decrese = () => setCount((prev) => prev - 1);

  return (
    <createCounter.Provider value={{ count, increse, decrese }}>
      {children}
    </createCounter.Provider>
  );
}
