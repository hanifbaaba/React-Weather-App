import { useState } from "react";

export default function WeatherCard() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
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
      <button className="weather-btn">Get Weather Data</button>
      <div className="weather-info">Weather Data</div>
    </div>
  );
}
