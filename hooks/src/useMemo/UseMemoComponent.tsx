import React, { useMemo } from "react";

function UseMemoComponent() {
    const [count, setCount] = React.useState(0);
    const [item, setItem] = React.useState(1000);

    // const multiplyCount = (num: number) => {
    //     console.log("Calculating...");
    //     return num * 10;
    // };
    console.log("Hello from UseMemoComponent");

    const multiplyCount = useMemo(() => {
        console.log("Calculating with useMemo...");
        return count * 10;
    }, [count]); // ✅ useMemo to memoize the function

    
    return (    
        <div>
            <h2>React useMemo Hook Example</h2>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
            {multiplyCount /* Without useMemo, recalculates on every render */}
            <h1>{item}</h1>
            <button onClick={() => setItem(item + 1000)}>Item - {item}</button>
            <hr />
        </div>
    );
}

export default UseMemoComponent;