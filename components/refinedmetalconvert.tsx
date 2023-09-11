"use client";
import React, { useState, ChangeEvent } from 'react';

export default function RefinedMetalConvert() {
  const [refinedMetalValue, setRefinedMetalValue] = useState<string>(''); // State to store the Refined Metal value

  // Function to handle input changes
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRefinedMetalValue(event.target.value);
  };

  // Conversion rates
  const scrapMetalRate = 9.09; // 1 Refined Metal = 9.09 Scrap Metal
  const reclaimedMetalRate = 3; // 1 Refined Metal = 3 Reclaimed Metal

  const refinedMetalInput = parseFloat(refinedMetalValue);

  // Check if the input is a valid number
  const isValidInput = !isNaN(refinedMetalInput) && isFinite(refinedMetalInput);

  const scrapMetalValue = isValidInput ? (refinedMetalInput * scrapMetalRate).toFixed(2) : '';
  const reclaimedMetalValue = isValidInput ? (refinedMetalInput * reclaimedMetalRate).toFixed(2) : '';

  return (
    <div>
        <p></p>
      <div>
        <label htmlFor="refinedMetalInput">Refined Metal: </label>
        <input
          id="refinedMetalInput"
          type="number"
          value={refinedMetalValue}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>= Scrap Metal: </label>
        <input type="text" value={isValidInput ? scrapMetalValue : ''} readOnly />
      </div>

      <div>
        <label>= Reclaimed Metal: </label>
        <input type="text" value={isValidInput ? reclaimedMetalValue : ''} readOnly />
      </div>
    </div>
  );
}
