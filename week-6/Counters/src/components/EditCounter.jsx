import React from "react";
import { useCounter } from "./CounterContext";

const EditCounter = ({ label }) => {
  const { count, increment, decrement } = useCounter();

  return (
    <div style={{ border: "1px solid orange", padding: "10px", margin: "5px" }}>
      <h3>{label}</h3>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>−</button>
    </div>
  );
};

export default EditCounter;
