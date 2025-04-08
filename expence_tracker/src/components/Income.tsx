import { useState } from "react";
import { useTracker } from "../context/TractContext";

function Income() {
  const { addIncome } = useTracker();
  const [amount, setAmount] = useState("");

  const handleAddIncome = () => {
    const value = parseFloat(amount);
    if (!amount || isNaN(value) || value < 0) {
      alert(`Please Enter a Positive Number only.`)
    }
    addIncome(value);
    setAmount("");
  };
  return (
    <div>
      <h2>Income</h2>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          onClick={handleAddIncome}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Income;
