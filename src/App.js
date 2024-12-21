import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "./components/WeatherCard.js"; // Correct relative import
import SearchBar from "./components/SearchBar.js"; // Correct relative import
import "/Users/atharvnakti/Desktop/Vs/React/weather-dashboard/src/App.css"; // Correct relative import

const App = () => {
  const [city, setCity] = useState("New York");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiKey = "95cb1ce398fe466391587bec228125fc"; // Replace with your actual API key from OpenWeatherMap

  const fetchWeatherData = async (cityName) => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
    } catch (err) {
      setError("Failed to fetch weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  return (
    <div className="app">
      <SearchBar setCity={setCity} />
      {loading && <div>Loading...</div>}
      {error && <div className="error">{error}</div>}
      {weather && !loading && !error && <WeatherCard weather={weather} />}
    </div>
  );
};

export default App;
