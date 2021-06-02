import React, { Component } from "react";

export default class FormsDemo extends Component {
  state = {
    name: "",
    comment: "",
  };

  handleChange = (e) => {
    console.log(e.target); // form  e.target[1].name =comment  -- input
    let value =
      e.target.name === "name" ? e.target.value.toUpperCase() : e.target.value;
    this.setState({
      // value: e.target.value.toUpperCase().substr(0, 10),
      //[e.target.name]: e.target.value,

      [e.target.name]: value,
    });
  };

  render() {
    return (
      <div>
        <form>
          Enter Name:{" "}
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          Enter comment :{" "}
          <textarea
            name="comment"
            cols="30"
            rows="10"
            value={this.state.comment}
            onChange={this.handleChange}
          ></textarea>
        </form>
      </div>
    );
  }
}
