import React, { Component } from "react";

export class StateFulComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "welcome Visitor",
    };
  }

  changeMsg() {
    this.setState({
      message: "Hello, Thanks for subscribing",
    });
  }
  render() {
    return (
      <div>
        <h1> Welcome {this.state.message}</h1>
        <button onClick={() => this.changeMsg()}>Like 👍 & subscribe</button>
      </div>
    );
  }
}

export default StateFulComp;
