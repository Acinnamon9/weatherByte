import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherDisplay = ({city}) => {
  const [weather, setWeather] = useState(null);
  const fetchWeather = async () => {
    
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            q: city,
            appid: "78ce392c48411c9ebeec20b0d778087b",
            units: "metric",
          },
        }
      );
      setWeather(response.data);
    };

  useEffect(() => {
    if(city)
    fetchWeather();
  }, [city]);

  return (
    <div>
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
