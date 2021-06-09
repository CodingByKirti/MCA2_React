import React, { Component } from "react";

export const UpdateComp = (Comp) => {
    
  return class extends Component {
    render() {
      return <Comp bluetooth=" bluetooth 5.0" {...this.props} />;
    }
  };
};
