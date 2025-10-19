import React, { JSX } from "react";

type PopupProps = {
  title: string;
  message: string;
  onClose: () => void;
};

function Popup(props: PopupProps): JSX.Element {
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
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={props.onClose}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "8px",
          width: "350px",
          textAlign: "center",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3>{props.title}</h3>
        <p>{props.message}</p>
        <button
          onClick={props.onClose}
          style={{
            marginTop: "15px",
            padding: "8px 16px",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Popup;
