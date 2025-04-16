import { useEffect, useState } from "react";

export default function WeatherCard() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "d0e248396fe4189a3c93cfb6ca0c881d";
  async function fetchWeatherData() {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      if (!res.ok) {
        throw new Error("Invalid City Name or Request Failed");
      }
      const data = await res.json();
      setWeatherData(data);
      setError(null);
    } catch (error) {
      setError("Sorry Couldn't get weather data");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="weather-container">
      <h1 className="weather-title">Weather Info</h1>
      <input
        type="text"
        className="city-input"
        placeholder="Enter City..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="weather-btn" onClick={fetchWeatherData}>
        Get Weather Data
      </button>
      <div className="weather-info">Weather Data</div>
    </div>
  );
}
