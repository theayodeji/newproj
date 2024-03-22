import React, { useState } from "react";
import "./Dropdown.scss";

const Option = ({ option }) => {
  return (
    <div className="dropdown-option">
      <span className="label">{option}</span>
      <span className="material-symbols-rounded arrow-primary">
        arrow_right_alt
      </span>
    </div>
  );
};

function Dropdown({ label }) {
 
  const [open, setOpen]  = useState(false);
  
  return (
    <div className={`${label} ${open && 'open'} dropdown`}>
      <div className="label" onClick={() => setOpen(!open)}>
        <span>{label}</span>
        <span class="material-symbols-rounded arrow">arrow_drop_down</span>
      </div>
      <div className="dropdown-options">
        <Option option={"Dance"} />
        <Option option={"Dance"} />
        <Option option={"Dance"} />
        <Option option={"Dance"} />
      </div>
    </div>
  );
}

export default Dropdown;
