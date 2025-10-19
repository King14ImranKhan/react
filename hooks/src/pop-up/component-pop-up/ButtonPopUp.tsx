import React from "react";

type ButtonPopupProps = {
  label: string;
  onClick: () => void; // ✅ return void
};

function ButtonPopup(props: ButtonPopupProps) {
  return (
    <button
      onClick={props.onClick}
      style={{
        padding: "10px 20px",
        borderRadius: "6px",
        border: "none",
        backgroundColor: "#007bff",
        color: "white",
        cursor: "pointer",
        marginRight: 10,
      }}
    >
      {props.label}
    </button>
  );
}

export default ButtonPopup;
