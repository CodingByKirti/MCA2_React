import React, { Component } from "react";

class ClassComp extends Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.name} as {this.props.designation}
        </h1>
      </div>
    );
  }
}

export default ClassComp;
