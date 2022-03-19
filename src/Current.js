import React from "react";
import icon from "./media/04n.svg";
import "./Current.css";

export default function Current(props) {
  return (
    <div className="current Current">
      <span className="current-temp">{props.current}</span>
      <span className="current-temp-unit"> °C </span>

      <span>
        <img src={icon} alt="" className="current-weather-icon" />
      </span>

      <div className="description">{props.description}</div>
      <div className="wind-humidity">
        Wind: {props.wind} km/h Humidity: {props.humidity} %
      </div>
    </div>
  );
}
