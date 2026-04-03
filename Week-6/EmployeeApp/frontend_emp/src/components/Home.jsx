import { useContext } from "react";
import { counterContextObj } from "../context/ContextProvider";
import { useCounterStore } from "../Store/useCounterStore.js";

function Home() {
  const { counter, changeCounter } = useContext(counterContextObj);
  //call useCounterStore hook to get state of Zustand store
  let { newCounter, incrementCounter } = useCounterStore();
  return (
    <div>
      <h1 className="text-4xl">Counter: {counter}</h1>
      <button onClick={changeCounter} className="bg-amber-300 p-5">
        Change
      </button>
      <h1 className="text-4xl">New Counter: {newCounter}</h1>
      <button onClick={incrementCounter} className="bg-amber-300 p-5">
        Change
      </button>
    </div>
  );
}

export default Home;
