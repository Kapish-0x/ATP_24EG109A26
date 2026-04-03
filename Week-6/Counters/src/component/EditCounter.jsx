import React from "react";
import { useCounter } from "../Context/CounterProvider";

const EditCounter = ({ label }) => {
  const { count, increment, decrement } = useCounter();

  return (
    <div style={{ border: "1px solid orange", padding: "10px", margin: "5px" }}>
      <h3>{label}</h3>
      <p>{count}</p>
      <button className="bg-green-400 px-4 py-2 rounded" onClick={increment}>
        +
      </button>
      <button className="bg-red-400 px-4 py-2 rounded" onClick={decrement}>
        -
      </button>
    </div>
  );
};

export default EditCounter;