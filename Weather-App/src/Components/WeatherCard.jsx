export default function WeatherCard() {
  return (
    <div className="weather-container">
      <h1 className="weather-title">Weather Info</h1>
      <input type="text" className="city-input" placeholder="Enter City..." />
      <button className="weather-btn">Get Weather Data</button>
      <div className="weather-info">Weather Data</div>
    </div>
  );
}
