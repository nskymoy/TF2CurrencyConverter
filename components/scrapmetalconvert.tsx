"use client";
import React, { useState, ChangeEvent } from 'react';

export default function ScrapMetalConvert() {
  const [ScrapMetalValue, setScrapMetalValue] = useState<string>(''); // State to store the Scrap Metal value

  // Function to handle input changes
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setScrapMetalValue(event.target.value);
  };

  // Conversion rates
  const refinedMetalRate = 0.11;
  const reclaimedMetalRate = 0.33;

  // Calculate the values only if the input is a valid number
  const scrapMetalValue = parseFloat(ScrapMetalValue);
  const reclaimedMetalValue = isNaN(scrapMetalValue) ? '' : (scrapMetalValue * reclaimedMetalRate).toFixed(2);
  const refinedMetalValue = isNaN(scrapMetalValue) ? '' : (scrapMetalValue * refinedMetalRate).toFixed(2);

  return (
    <div>
      <div>
        <label htmlFor="scrapMetalInput">Scrap Metal: </label>
        <input
          id="scrapMetalInput"
          type="number"
          value={ScrapMetalValue}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>= Reclaimed Metal: </label>
        <input type="text" value={reclaimedMetalValue} readOnly />
      </div>

      <div>
        <label>= Refined Metal: </label>
        <input type="text" value={refinedMetalValue} readOnly />
      </div>
    </div>
  );
}
