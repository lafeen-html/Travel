import React from 'react';
import "./Select.css";

export default function Select({options, defaultValue, value, onChange}) {
  return (
    <select 
    value={value}
    onChange={e => onChange(e.target.value)}
    className="w-25 form-select form-select-sm"
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