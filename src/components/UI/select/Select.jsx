import React from 'react';
import "./Select.css";

export default function Select({ options, defaultValue, value, onChange, style }) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="form-select form-select-sm" 
      style={style}
    >
      <option disabled value="">{defaultValue}</option>
      {options.map(option =>
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      )}
    </select>
  )
}