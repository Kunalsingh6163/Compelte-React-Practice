"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// Define the context type
interface CounterContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// Create the context
const CounterContext = createContext<CounterContextType | undefined>(undefined);

// Create a provider component
export const CounterProvider = ({ children }: { children: ReactNode }) => {
    //need to define the initial state here and will pass into the provider.
  const [count, setCount] = useState(0);

  // what actions we want to perform on event click we can write here and pass.
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

// Custom hook to use the CounterContext
export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};
