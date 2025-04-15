export default function WeatherCard() {
  return (
    <div className="weather-info">
      <h1>Weather Info:</h1>
      <input type="text" className="input-weather" />
      <button className="btn-weather">Get Weather Data</button>
      <div className="weather-placeholder">Weather Data</div>
    </div>
  );
}
