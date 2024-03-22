// Card.jsx
import React from 'react';
import './Card.scss';

const Card = ({ size, children }) => {
  return (
    <div className={`card ${size}`}>
      {children}
    </div>
  );
};

export default Card;
