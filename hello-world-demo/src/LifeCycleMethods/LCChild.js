import React, { Component } from "react";

export class LCChild extends Component {
  componentWillMount() {
    console.log("Child comp mounted");
  }
  componentWillUnmount() {
    console.log("Child comp is unmounted");
  }

  render() {
    return <div></div>;
  }
}

export default LCChild;
