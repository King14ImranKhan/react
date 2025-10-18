import React from "react";

type Props = {
  onIncrement: () => void;
};

// ✅ Wrapped with React.memo to avoid unnecessary re-renders
const IncrementButton = React.memo(({ onIncrement }: Props) => {
  console.log("➕ IncrementButton rendered");

  return (
    <button
      onClick={onIncrement}
      style={{
        padding: "10px 20px",
        backgroundColor: "green",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      Increment
    </button>
  );
});

export default IncrementButton;
