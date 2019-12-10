import React from "react";

const Weather = (props) => {
  
  return (
    <div>
      <h2>{props.city.name}</h2>
      <i>icon</i>
      <div>
        <span>max</span>
        <span>min</span>
      </div>

    </div>
  );
};

export default Weather;
