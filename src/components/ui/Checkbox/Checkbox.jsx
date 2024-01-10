import React, { useState } from 'react';
import './Checkbox.scss'; // Import your CSS styles

const Checkbox = ({label}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className={`checkbox ${isChecked ? 'checked' : ''}`}>
      <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
      <span className="checkbox-icon">
        {/* SVG for unchecked state */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="1" width="22" height="22" rx="5" ry="5"></rect>
        </svg>
        {/* SVG for checked state */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </span>
      {label}
    </label>
  );
};

export default Checkbox;
