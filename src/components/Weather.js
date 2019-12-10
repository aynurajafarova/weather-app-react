import React from "react";

const Weather = props => {
  return (
    <div>
      <h2>{props.city.name}</h2>
      <i>icon</i>
      <div>
        <p>min {props.main.temp_min}</p>
        <p>max {props.main.temp_max}</p>
        <p>sunset: {props.sunset}</p>
        <p>sunrise: {props.sunrise}</p>
      </div>
    </div>
  );
};

export default Weather;
