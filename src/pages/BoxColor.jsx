import React, { useState } from 'react';
import './BoxColor.css';

const boxColors = [
  { id: 1, text: 'box 1', className: 'red', originalColor: 'red' },
  { id: 2, text: 'box 2', className: 'yellow', originalColor: 'yellow' },
  { id: 3, text: 'box 3', className: 'aqua', originalColor: 'aqua' },
  { id: 4, text: 'box 4', className: 'purple', originalColor: 'purple' },
]

function BoxColor() {
  const [currentColor, setCurrentColor] = useState(null);

  function handleChangeColor(color) {
    if(currentColor === color) {
      setCurrentColor(null)
      return;
    }
    setCurrentColor(color); // null
  }

  return (
    <div className="boxColor">
      {boxColors.map(box => (
        <div
          style={{
            backgroundColor: currentColor === box.originalColor ? box.originalColor : currentColor
          }}
          className={box.className}
          onClick={() => handleChangeColor(box.originalColor)}
        >
          {box.text}
        </div>
      ))}
          
    </div>
  );
}; 
export default BoxColor;