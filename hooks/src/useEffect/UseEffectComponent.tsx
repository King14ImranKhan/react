import React, { useEffect } from "react";
import { useState } from "react";

export function UseStateComponent() {
    const [count, setCount] = useState(0);
    
    // Components will not get re-render as state changes for count
    useEffect(() => {
        console.log("useEffect triggered: Count changed to");
    }, []);
 

    return (
        <div>
            <h1>useState Hook Example</h1>
            <p>Current Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}
export default UseStateComponent;