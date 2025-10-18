import React from "react";

type Props = {
  onDecrement: () => void;
};

// ✅ Also wrapped in React.memo
const DecrementButton = React.memo(({ onDecrement }: Props) => {
  console.log("➖ DecrementButton rendered");

  return (
    <button
      onClick={onDecrement}
      style={{
        padding: "10px 20px",
        backgroundColor: "red",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      Decrement
    </button>
  );
});

export default DecrementButton;
