import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.incrementCount = this.incrementCount.bind(this);
  }
  incrementCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrementCount() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  render() {
    return (
      <div>
        <hr />
        <h3 onMouseOver={this.incrementCount}>count = {this.state.count}</h3>
        <button onClick={() => this.incrementCount()}>
          Click to inccrement
        </button>
        <button onClick={this.decrementCount.bind(this)}>
          Click to decrement
        </button>
        <hr />
      </div>
    );
  }
}

export default Counter;
