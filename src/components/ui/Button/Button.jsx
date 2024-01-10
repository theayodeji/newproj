// Button.jsx
import React from 'react';
import './Button.scss';

const Button = ({ label, onClick, type }) => (
  <button className={`btn btn-${type}`} data-type={type} onClick={onClick}>
    {label}
  </button>
);

export default Button;
