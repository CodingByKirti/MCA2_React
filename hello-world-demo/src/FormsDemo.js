import React, { Component } from "react";

export default class FormsDemo extends Component {
  state = {
    value: "Kirti",
  };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          defaultValue="Kirti"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
