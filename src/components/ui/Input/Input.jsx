// Input.jsx
import React from 'react';
import './Input.scss';

const Input = ({ type, placeholder, label, icon }) => {
  return (
    <div className="input-container">
      {label && <label>{label}</label>}
      <div className="input-wrapper">
        {icon && <div className="input-icon">{icon}</div>}
        <input type={type} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default Input;
