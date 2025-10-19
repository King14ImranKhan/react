import React from "react";
import { JSX } from "react/jsx-runtime";

type InfoCardProps = {
  info: string;
  onClose: () => void;
};

function InfoCard(props: InfoCardProps): JSX.Element {
  return (
    <div
      style={{
        border: "1px solid #007bff",
        borderRadius: "8px",
        padding: "20px",
        width: "300px",
        margin: "0 auto",
        backgroundColor: "#e7f3ff",
        textAlign: "center",
      }}
    >
      <h4>Info Card</h4>
      <p>{props.info}</p>
      <button
        onClick={props.onClose}
        style={{
          marginTop: "10px",
          padding: "6px 12px",
          border: "none",
          borderRadius: "4px",
          backgroundColor: "#007bff",
          color: "white",
          cursor: "pointer",
        }}
      >
        Close
      </button>
    </div>
  );
}

export default InfoCard;
