import React from "react";

type DetailsPopupProps = {
  name: string;
  description: string;
  onClose: () => void;
};

function DetailsPopup({ name, description, onClose }: DetailsPopupProps) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          width: "350px",
          textAlign: "center",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3>{name}</h3>
        <p>{description}</p>
        <button
          onClick={onClose}
          style={{
            marginTop: "10px",
            padding: "6px 12px",
            border: "none",
            borderRadius: "4px",
            backgroundColor: "#dc3545",
            color: "white",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default DetailsPopup;
