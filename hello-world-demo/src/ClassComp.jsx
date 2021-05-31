import React, { Component } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
export class ClassComp extends Component {
  render() {
    return (
      <>
        <h1> Hello the props are {this.props.abc}</h1>
        <button>Click Here</button>
      </>
    );  
  }
}
