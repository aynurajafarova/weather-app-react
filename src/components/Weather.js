import React from "react";

const Weather = props => {
  if (!props.sunset && !props.sunrise) {
    return null;
  }
  return (
    <div className="weather">
      <div className="weather-content">
        <h2 className="city-name">{props.city.name}</h2>
        <p className="weather-description">{props.description}</p>
        <div className="city-temperature">
          <div className="temp">
            <p>{props.main.temp}</p>
          </div>
          <div className="min-max-temp">
            <p>{props.main.temp_min}</p>
            <p>{props.main.temp_max}</p>
          </div>
        </div>
        <div className="sunset-sunrise">
          <p>sunset: {props.sunset}</p>
          <p>sunrise: {props.sunrise}</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
