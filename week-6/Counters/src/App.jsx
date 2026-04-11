import React from "react";
import { CounterProvider } from "./components/CounterContext";
import EditCounter from "./components/EditCounter";

function App() {
  return (
    <CounterProvider>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", background: "pink", padding: "20px" }}>
        <EditCounter label="EditCounter1" />
        <EditCounter label="EditCounter2" />
        <EditCounter label="EditCounter3" />
        <EditCounter label="EditCounter4" />
      </div>
    </CounterProvider>
  );
}

export default App;
