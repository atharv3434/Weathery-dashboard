import React from "react";

const WeatherCard = ({ weather }) => {
  const { main, weather: weatherDetails, wind, name } = weather;
  const weatherCondition = weatherDetails[0].main;

  return (
    <div className={`weather-card ${weatherCondition.toLowerCase()}`}>
      <h2>{name}</h2>
      <h3>{weatherCondition}</h3>
      <p>Temperature: {main.temp}°C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
