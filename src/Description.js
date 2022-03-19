import React from "react";
import "./Description.css";

export default function Description(props) {
  return (
    <div className="Description">
      <div className="row today-date-temp">
        <div className="col-8">
          <span className="city">
            <h1>{props.cityName}</h1>
            <span>
              Last updated: <br />
              <span className="date-and-time">Today</span>
            </span>
          </span>
        </div>
        <div className="col-4">
          <span className="today-temperature">
            <span className="high-temperature high">{props.maxTemp}</span>
            <span className="today-temp-unit">°C</span>
            <br />
            <br />

            <span className="low-temperature">{props.minTemp}</span>
            <span className="today-temp-unit">°C</span>
          </span>
        </div>
      </div>
    </div>
  );
}
