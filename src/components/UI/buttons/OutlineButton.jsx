import React from 'react';
import "./OutlineButton.css";

export default function OutlineButton({ children, ...props }) {
  return (
    <button {...props} className="btn btn-sm btn-outline-primary">
      {children}
    </button>
  )
}