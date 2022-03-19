import React from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <div className="SearchEngine">
      <form>
        <div className="input-group mb-3 search-bar">
          <input
            type="search"
            className="form-control"
            placeholder="Enter the name of a city"
          />
          <button className="btn btn-outline-light search-button" type="submit">
            <i className="fas fa-search search-icon "></i>
          </button>
        </div>
      </form>
    </div>
  );
}
