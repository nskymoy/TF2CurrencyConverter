"use client";
import React, { useState, ChangeEvent } from 'react';

export default function ReclaimedMetalConvert() {
  const [reclaimedMetalValue, setReclaimedMetalValue] = useState<string>(''); // State to store the Reclaimed Metal value

  // Function to handle input changes
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setReclaimedMetalValue(event.target.value);
  };

  // Conversion rates
  const scrapMetalRate = 3; // 1 Reclaimed Metal = 0.33 Scrap Metal
  const refinedMetalRate = 0.33; // 1 Reclaimed Metal = 0.03 Refined Metal

  const reclaimedMetalInput = parseFloat(reclaimedMetalValue);

  // Check if the input is a valid number
  const isValidInput = !isNaN(reclaimedMetalInput) && isFinite(reclaimedMetalInput);

  const scrapMetalValue = isValidInput ? (reclaimedMetalInput * scrapMetalRate).toFixed(2) : '';
  const refinedMetalValue = isValidInput ? (reclaimedMetalInput * refinedMetalRate).toFixed(2) : '';

  return (
    <div>
        <p></p>
      <div>
        <label htmlFor="reclaimedMetalInput">Reclaimed Metal: </label>
        <input
          id="reclaimedMetalInput"
          type="number"
          value={reclaimedMetalValue}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>= Scrap Metal: </label>
        <input type="text" value={isValidInput ? scrapMetalValue : ''} readOnly />
      </div>

      <div>
        <label>= Refined Metal: </label>
        <input type="text" value={isValidInput ? refinedMetalValue : ''} readOnly />
      </div>
    </div>
  );
}
