import React, { Component } from "react";

class SearchBar extends Component {
  state = { cityName: "" };

  onInputChange = event => {
    this.setState({ cityName: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
  };

  onButtonClick = () => {
    this.props.onFormSubmit(this.state.cityName);
  };

  render() {
    return (
      <div className="searchBar">
        <form onSubmit={this.onFormSubmit}>
          <input
            className="search-input"
            type="text"
            value={this.state.cityName}
            onChange={this.onInputChange}
          />
          <button className="btn-search" onClick={this.onButtonClick}>
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
