import React from "react";
import SearchEngine from "./SearchEngine";
import Current from "./Current";
import Description from "./Description";

import "./App.css";

function App() {
  let weather = {
    city: "London",
    date: " Sunday 02:49 AM 20 February",
    highest: 9,
    lowest: 4,
    current: 6,
    description: "Broken Clouds",
    wind: 3,
    humidity: 89,
  };
  return (
    <div className="App">
      <div className="container">
        <SearchEngine />

        <Description {...weather} />
        <Current {...weather} />
      </div>
      <div className="source-code">
        <a
          href="https://github.com/h0ma-s/weather-app"
          target="_blank"
          rel="noreferrer noopener"
          className="code-link"
        >
          Open-source code
        </a>
        by Homa Sharifmousavi
      </div>
      ;
    </div>
  );
}

export default App;
