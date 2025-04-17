import { useEffect, useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function WeatherCard() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  let [color, setColor] = useState("#4169E1");

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
      <ClipLoader
        color={color}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {weatherData && (
        <div className="weather-info">
          <h3>
            {" "}
            - City: {weatherData.name}, {weatherData.sys.country}
          </h3>
          <h3> - Temp: {(weatherData.main.temp - 273.15).toFixed(1)}</h3>
          <h3>- Description: {weatherData.weather[0].description}</h3>
          <h3>🌡 Temp: {weatherData.main.temp}°C</h3>
          <h3>💧 Humidity: {weatherData.main.humidity}%</h3>
          <h3>🌬 Wind: {weatherData.wind.speed} m/s</h3>
        </div>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
}
