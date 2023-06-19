import React from 'react';
import "./Modal.css";

export default function Modal({ active, setActive, children }) {

  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        <div className="popup__button mb-3">
          <button type="button" className="btn-close" onClick={() => setActive(false)}></button>
        </div>
        <div>
          {children}
        </div>
    </div>
    </div>
  )
}