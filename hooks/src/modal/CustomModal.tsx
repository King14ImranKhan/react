import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");


export default function CustomModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={openModal}>Open Modal</button>

      <CustomModalOpen
        isOpen={isOpen}
        onRequestClose={closeModal}
        title="Welcome!"
        message="This modal opens on button click using props 🚀"
      />
    </div>
  );
}

type CustomModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  title: string;
  message: string;
};

function CustomModalOpen({ isOpen, onRequestClose, title, message }: CustomModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Custom Modal"
      style={{
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        content: {
          width: "400px",
          margin: "auto",
          borderRadius: "12px",
          padding: "20px",
          textAlign: "center",
        },
      }}
    >
      <h2>{title}</h2>
      <p>{message}</p>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
}


