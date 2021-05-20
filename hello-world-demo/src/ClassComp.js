import React, { Component } from "react";

export class ClassComp extends Component {
  render() {
    return (
      <>
        <h1> Hello the props are {this.props.abc}</h1>
      </>
    );
  }
}
