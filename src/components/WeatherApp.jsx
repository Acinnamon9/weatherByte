import React, { useState, useEffect } from 'react';
import { cities } from './cities';
import WeatherDisplay from './WeatherDisplay';
import CitySearch from './CitySearch';
const WeatherApp = () => {
  const [city, setCity] = useState("");
  return (
    <div>
      <h1>Weather App</h1>
      <CitySearch cities = {cities} setCity = {setCity} />
      <WeatherDisplay city = {city} />
      </div>
  );
};

export default WeatherApp;
