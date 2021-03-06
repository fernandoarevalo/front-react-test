import React from "react";
// Utils
import { MODAL } from "utils/constants/Contants";

export default function Modal() {
  return (
    <div>
      <div className="modal-content">
        <h4>{MODAL.TITLE}</h4>
        <p>{MODAL.MESSAGE}</p>
      </div>
    </div>
  );
}
