import React, { Component } from "react";
import Weather from "./Weather";
import SearchBar from "./SearchBar";
import OpenWeatherMap from "../apis/OpenWeatherMap";

class App extends Component {
  state = { city: "" };

  onCitySubmit = async city => {
    // console.log(city);
    const response = await OpenWeatherMap.get("/weather", {
      params: {
        q: city,
        appid: "2e3920666e272c712a5a715e370aa055"
      }
    });

    this.setState({ city: response.data });

    console.log(response);
  };
  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onCitySubmit} />
        <Weather city={this.state.city} />
      </div>
    );
  }
}
export default App;
