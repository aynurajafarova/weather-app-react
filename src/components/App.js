import React, { Component } from "react";
import Weather from "./Weather";
import SearchBar from "./SearchBar";
import OpenWeatherMap from "../apis/OpenWeatherMap";

class App extends Component {
  state = { city: "", main: "", sunset: "", sunrise: "" };

  onCitySubmit = async city => {
    // console.log(city);
    const response = await OpenWeatherMap.get("/weather", {
      params: {
        q: city,
        appid: "2e3920666e272c712a5a715e370aa055",
        units: "metric"
      }
    });

    // calc sunset
    let sunset = response.data.sys.sunset;
    let date = new Date();
    date.setTime(sunset);

    let sunset_date =
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    console.log(sunset_date);

    // calc sunrise
    let sunrise = response.data.sys.sunrise;
    date.setTime(sunrise);
    let sunrise_date =
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    console.log(sunrise_date);

    this.setState({
      city: response.data,
      main: response.data.main,
      sunset: sunset_date,
      sunrise: sunrise_date
    });

    console.log(response.data);
  };
  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onCitySubmit} />
        <Weather
          city={this.state.city}
          main={this.state.main}
          sunset={this.state.sunset}
          sunrise={this.state.sunrise}
        />
      </div>
    );
  }
}
export default App;
