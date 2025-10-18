import React, { useState, useCallback } from "react";
import DecrementButton from "./DecrementButton";
import IncrementButton from "./IncrementButton";


function ParentUseCallback() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  console.log("🏠 Parent rendered");

  // Functions are memoized — reference stays the same across renders
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>useCallback Example with Multiple Components</h2>
      <h3>Count: {count}</h3>

      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <IncrementButton onIncrement={increment} />
        <DecrementButton onDecrement={decrement} />
      </div>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <p>You typed: {text}</p>
      </div>
    </div>
  );
}

export default ParentUseCallback;
