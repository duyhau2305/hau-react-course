import React, { useState } from 'react';
import Button from "../components/Button";
import randomColor from 'randomcolor';

function GenerateBox() {
  // State variables
  const [numBoxes, setNumBoxes] = useState(0);
  const [boxColors, setBoxColors] = useState([]);

  // Event handler for changing the number of boxes
  const handleNumBoxesChange = (e) => {
    setNumBoxes(parseInt(e.target.value));
  };

  // Event handler for generating boxes
  const handleGenerateClick = () => {
    if (numBoxes === 0) {
      setBoxColors([]);
    } else {
      const colors = Array.from({ length: numBoxes }, () => 'gray');
      setBoxColors(colors);
    }
  };

  // Event handler for clicking on a box to change its color
  const handleBoxClick = (index) => {
    const newColors = [...boxColors];
    newColors[index] = getRandomColor();
    setBoxColors(newColors);
  };

  // Function to generate a random color in hexadecimal format
  const getRandomColor = () => {
        return randomColor();
  };

  // JSX to render the component's UI
  return (
    <div>
      <label htmlFor="numBoxes">Number of boxes:</label>
      <input
        type="number"
        id="numBoxes"
        min="0"
        max="128"
        value={numBoxes}
        onChange={handleNumBoxesChange}
      />      
      <Button text='Generate' handleClick={handleGenerateClick} />

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {numBoxes === 0 ? (
          <p>No box</p>
        ) : (
          boxColors.map((color, index) => (
            <div
              key={index}
              style={{
                width: '100px',
                height: '100px',
                backgroundColor: color,
                textAlign: 'center',
                marginRight: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleBoxClick(index)}
            >
              Box #{index + 1}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default GenerateBox;
