import React from "react";

function UseRefComponent() {
    const countRef = React.useRef(0);

    const handleClick = () => {
        countRef.current += 1;
        console.log(`Count: ${countRef.current}`);
    };

    const inputHandler = () => {
        const inputElement = document.querySelector('input');
        if (inputElement) {
            inputElement.focus();
        }
    };
    return (
        <div>
            <h2>UseRef Hook</h2>
            <button onClick={handleClick}>Increment</button>
            <input type="text" placeholder="Type here..." />
            <button onClick={inputHandler}>Focus on Input Field</button>

        </div>
    );
}

export default UseRefComponent;
