import React, { Component } from "react";

const recommendationsList = [
  "apple",
  "banana",
  "cherry",
  "grape",
  "kiwi",
  "lemon",
  "mango",
  "orange",
  "pear",
  "strawberry"
];

class SearchWithRecommendations extends Component {
  state = {
    inputValue: ""
  };

  handleInputChange = (event) => {
    const query = event.target.value;
    this.setState({ inputValue: query });
  };

  render() {
    const { inputValue } = this.state;
    const suggestions = recommendationsList.filter((item) =>
      item.toLowerCase().includes(inputValue.toLowerCase())
    );

    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={inputValue}
          onChange={this.handleInputChange}
        />
        <div id="recommendations">
          {suggestions.length > 0 ? (
            suggestions.map((suggestion, index) => (
              <div
                key={index}
                className={`suggestion ${index === 0 ? "top-suggestion" : ""}`}
                onClick={() => this.setState({ inputValue: suggestion })}
              >
                {suggestion}
              </div>
            ))
          ) : (
            <div>No recommendations available.</div>
          )}
        </div>
      </div>
    );
  }
}

export default SearchWithRecommendations;
