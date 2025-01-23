import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, title, text, css }) => {
  if (!isOpen) return null;

  return (
    <div className={"modal-overlay"} onClick={onClose}>
      <div
        className={"modal-content " + css}
        onClick={(e) => e.stopPropagation()} // Evita que el clic en el contenido cierre el modal.
      >
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Modal;
