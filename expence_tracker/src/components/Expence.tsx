import { useState } from "react";
import { useTracker } from "../context/TractContext";

function Expence() {
  const { addExpense } = useTracker();
  const [amount, setAmount] = useState("");

  const handleAddExpense = () => {
    const value = parseFloat(amount);
    if (!amount || isNaN(value) || value < 0) {
      alert(`Please Enter a Positive Number only`)
    }
    addExpense(value);
    setAmount("");
  };
  return (
    <div>
      <h2>Expence</h2>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          onClick={handleAddExpense}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Expence;
