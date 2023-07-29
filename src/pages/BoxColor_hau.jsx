import React, { useState } from 'react';
import './BoxColor.css';

function BoxColor() {
  const colors = ['red', 'gold', 'aqua', 'purple'];
  const colorNames = ['Đỏ', 'Gold', 'Xanh', 'Tím'];

  // Initialize the state for each block
  const [blockColors, setBlockColors] = useState({
    red: 'red',
    gold: 'gold',
    aqua: 'aqua',
    purple: 'purple',
  });

  const handleClick = (color) => {
    if (blockColors[color] === 'red') {
      // Set all blocks to red
      setBlockColors({
        red: 'red',
        gold: 'red',
        aqua: 'red',
        purple: 'red',
      });
    } else if (blockColors[color] === 'gold') {
      // Set all blocks to red
      setBlockColors({
        red: 'gold',
        gold: 'gold',
        aqua: 'gold',
        purple: 'gold',
      });
    } else if  (blockColors[color] === 'aqua') {
      // Set all blocks to red
      setBlockColors({
        red: 'aqua',
        gold: 'aqua',
        aqua: 'aqua',
        purple: 'aqua',
      }); 
    }else if  (blockColors[color] === 'purple') {
        // Set all blocks to red
        setBlockColors({
          red: 'purple',
          gold: 'purple',
          aqua: 'purple',
          purple: 'purple',
        });
      } else {
      // Set all blocks to their default colors
      setBlockColors({
        red: 'red',
        gold: 'gold',
        aqua: 'aqua',
        purple: 'purple',
      });
    }
  };

  return (
    <div className="container">
      {colors.map((color, number) => (
        <div
          className={`block ${blockColors[color]}`}
          onClick={() => handleClick(color)}
        >
          {colorNames[number]}
        </div>
      ))}
    </div>
  );
}; 
export default BoxColor;