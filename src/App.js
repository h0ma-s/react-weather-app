import React from "react";
import SearchEngine from "./SearchEngine";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchEngine />
      </div>
      <div className="source-code">
        <a
          href="https://github.com/h0ma-s/react-weather-app"
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
