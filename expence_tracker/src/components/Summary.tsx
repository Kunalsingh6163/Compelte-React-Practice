import { useTracker } from "../context/TractContext";

function Summary() {
  const { income, expense, resetAll } = useTracker();

  const totalIncome = income.reduce((a, b) => a + b, 0);
  const totalExpense = expense.reduce((a, b) => a + b, 0);
  const balance = totalIncome - totalExpense;

  return (
    <div>
      <h2>Summary</h2>
      <h2>Total Income:- {totalIncome}</h2>
      <h2>Total Expense:- {totalExpense}</h2>
      <h2>Total Balance:- {balance}</h2>
      <div>
        <button
          onClick={resetAll}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Reset All
        </button>
      </div>
    </div>
  );
}

export default Summary;
