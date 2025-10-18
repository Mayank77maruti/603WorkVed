import React, { useState } from 'react';
import './styles.css';

const AreaInput = ({ setTotalArea }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    const area = parseInt(inputValue, 10);
    if (!isNaN(area)) {
      setTotalArea(area);
    }
  };

  return (
    <div className="area-input">
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter total area (sq ft)"
      />
      <button onClick={handleSubmit}>Set Area</button>
    </div>
  );
};

export default AreaInput;