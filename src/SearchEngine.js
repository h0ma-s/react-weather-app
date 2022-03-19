import React, { useState } from "react";
import Current from "./Current";
import Description from "./Description";
import axios from "axios";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [city, setCity] = useState("London");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});
  getWeatherData(city);

  function handleResponse(response) {
    setLoaded(true);
    setWeather({
      cityName: response.data.name,
      currentTemperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `/media/${response.data.weather[0].icon}.svg`,
      description: response.data.weather[0].description,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
    });
  }

  function getWeatherData() {
    let apiKey = "e595356bb77e874bab1cb87dc84b6d45";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}
`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    getWeatherData();
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3 search-bar">
        <input
          type="search"
          className="form-control"
          placeholder="Enter the name of a city"
          onChange={updateCity}
        />
        <button className="btn btn-outline-light search-button" type="submit">
          <i className="fas fa-search search-icon "></i>
        </button>
      </div>
    </form>
  );

  if (loaded === true) {
    return (
      <div>
        {form}
        <Description {...weather} />
        <Current {...weather} />
      </div>
    );
  } else {
    return (
      <div>
        {form}
        <p>The Application is Loding. Please Wait...</p>
      </div>
    );
  }
}
