import React from "react";

type ButtonTriggerProps = {
  label: string;
  onClick: () => void;
};

function ButtonTrigger({ label, onClick }: ButtonTriggerProps) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        borderRadius: "6px",
        border: "none",
        backgroundColor: "#007bff",
        color: "white",
        cursor: "pointer",
        margin: "5px",
      }}
    >
      {label}
    </button>
  );
}

export default ButtonTrigger;
