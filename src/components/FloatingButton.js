
import React from 'react';
import '../App.css';

const FloatingButton = ({ onClick }) => {
  return (
    <button className="floating-btn" onClick={onClick}>
      +
    </button>
  );
};

export default FloatingButton;
