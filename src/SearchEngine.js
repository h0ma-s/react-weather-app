import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [city, setCity] = useState("London");
  getWeatherData(city);

  function handleResponse(response) {
    console.log(response);
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
  return (
    <div className="SearchEngine">
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
    </div>
  );
}
