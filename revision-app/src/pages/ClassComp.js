import React, { Component } from "react";

export class ClassComp extends Component {
  constructor() {
    super();

    this.state = {
      str: "HELLO",
    };
  }

  changeStr() {
    this.setState({
      str: this.state.str === "HELLO" ? "BYE" : "HELLO",
    });
  }
  render() {
    return (
      <div>
        Hello Everyone {this.props.name}
        <h1 onMouseOver={() => this.changeStr()}> {this.state.str}</h1>
      </div>
    );
  }
}

export default ClassComp;
