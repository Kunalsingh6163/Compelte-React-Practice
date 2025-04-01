import React from "react";
import CounterApp from "../components/contextAPI/counter/Counter";
import { CounterContext } from "../components/contextAPI/crateContext/CounterContext";

function Count() {
  return (
    <div>
      <CounterContext>
        <CounterApp />
      </CounterContext>
    </div>
  );
}

export default Count;
