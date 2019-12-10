import React, { Component } from "react";

class SearchBar extends Component {
  state = { cityName: "" };

  onInputChange = event => {
    this.setState({ cityName: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.cityName);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label>Country search</label>
          <input
            type="text"
            value={this.state.cityName}
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
