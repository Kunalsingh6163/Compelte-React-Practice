// src/App.tsx
import React from "react";
import Income from "./components/Income";
import Expense from "./components/Expence";
import Summary from "./components/Summary";
import { TrackProvider } from "./context/TractContext";

const App: React.FC = () => {
  return (
    <TrackProvider>
      <div style={{ padding: "20px" }}>
        <h2>Expense Tracker</h2>
        <Income />
        <Expense />
        <Summary />
      </div>
    </TrackProvider>
  );
};

export default App;
