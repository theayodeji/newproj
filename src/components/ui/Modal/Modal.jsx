import React from "react";
import "./modal.scss";
import Card from "../Card/Card";

function Modal({ name, content, closeModal}) {

  return (
    <div className={`modal ${name}`}>
      <div className="modal-wrapper">
        <span class="material-symbols-rounded close-modal-btn" onClick={closeModal}>close</span>.
        <Card children={content} size={"medium"} />
      </div>
    </div>
  );
}

export default Modal;
