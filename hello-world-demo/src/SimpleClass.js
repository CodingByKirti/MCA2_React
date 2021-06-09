import React, { Component } from "react";

export default class SimpleClass extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    //  this.handleClick = this.handleClick.bind(this)
  }

  fun() {
    // if i need this... we should bind it in const
  }

  handleClick = () => {
    console.log("button clicked", this);
    {this.props.prop}

    // automatically binds this
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <button onClick={() => this.handleClick()}>Click Me</button>
        // DONT CALL IT DIRECTLY
      </div>
    );
  }
}
