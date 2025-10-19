import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./redux/hooks/hooks";
import { increment, decrement, reset } from "./redux/slices/counter";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* ✅ h1 can have mixed text + expression safely */}
        <h1>{`Count is ${count}`}</h1>

        <div>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
      </header>
    </div>
  );
}

export default App;
