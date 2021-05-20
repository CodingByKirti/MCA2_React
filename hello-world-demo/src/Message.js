import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }

  changeMsg() {
    this.setState({
      message: "Thanks for the Like",
    });
  }
  render() {
    return (
      <div>
        <h1> {this.state.message}</h1>
        <button onClick={() => this.changeMsg()}>Click Here to Like 👍 </button>
      </div>
    );
  }
}

export default Message;
