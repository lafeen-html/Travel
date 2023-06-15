import React from 'react';
import "./PrimaryButton.css";

export default function PrimaryButton({ children, ...props }) {
  return (
    <button {...props} className="btn btn-sm btn-primary">
      {children}
    </button>
  )
}
