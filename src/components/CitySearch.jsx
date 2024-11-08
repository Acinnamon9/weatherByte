import React, { useState } from "react";
const CitySearch = ({ cities, setCity }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleKeyDown = (e) => {
    if ((e.key === "Enter")) {
      setCity(inputValue);
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
        value={inputValue}
        onChange={handleChange}
        onkeydown={handleKeyDown}
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
