import { createContext, useContext, useState } from "react";

interface TransactionContextType {
  income: number[];
  expense: number[];
  addIncome: (amount: number) => void;
  addExpense: (amount: number) => void;
  resetAll: () => void;
}

const TractContext = createContext<TransactionContextType | undefined>(
  undefined
);

export const TrackProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [income, setIncome] = useState<number[]>([]);
  const [expense, setExpense] = useState<number[]>([]);

  const addIncome = (amount: number) => {
    setIncome([...income, amount]);
  };
  const addExpense = (amount: number) => {
    setExpense([...expense, amount]);
  };

  const resetAll = () => {
    setIncome([]);
    setExpense([]);
  };

  return (
    <TractContext.Provider
      value={{ income, expense, addIncome, addExpense, resetAll }}
    >
      {children}
    </TractContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTracker = () => {
  const context = useContext(TractContext);
  if (!context) {
    throw new Error("useTracker must be used within a TrackProvider");
  }
  return context;
};
