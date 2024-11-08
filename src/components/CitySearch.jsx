import React, { useState } from "react";

const CitySearch = ({ cities, setCity }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value); // Update inputValue state
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setCity(inputValue); // Set city when 'Enter' is pressed
      console.log("City selected:", inputValue);
    }
  };

  return (
    <div>
      <input
        list="cities"
        id="city"
        name="city"
        placeholder="Start typing..."
        value={inputValue} // Use inputValue here to bind the input field
        onChange={handleChange}
        onKeyDown={handleKeyDown} // Correct event name
      />
      <datalist id="cities">
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </datalist>
    </div>
  );
};

export default CitySearch;
