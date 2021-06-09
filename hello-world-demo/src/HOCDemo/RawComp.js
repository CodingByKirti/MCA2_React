import React, { Component } from "react";
import { UpdateComp } from "./UpdateComp";
class RawComp extends Component {
  state = {
    brand: "Sony",
  };
  componentWillMount() {
    console.log("message");
  }
  render() {
    return (
      <>
        <h1>
          {" "}
          This is a headSet of BoatRokerz {this.props.color} has{" "}
          {this.props.bluetooth}
        </h1>
        <h2>You can opt for {this.state.brand}</h2>
      </>
    );
  }
}
export default UpdateComp(RawComp);
