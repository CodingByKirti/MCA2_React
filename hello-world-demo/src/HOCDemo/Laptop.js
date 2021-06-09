import React, { Component } from "react";
import { UpdateComp } from "./UpdateComp";

class Laptop extends Component {
  render() {
    return (
      <div>
        <h1>
          {" "}
          Laptop with screen size : {this.props.size} of {this.props.color}
          with {this.props.bluetooth}
        </h1>
      </div>
    );
  }
}

export default UpdateComp(Laptop);
