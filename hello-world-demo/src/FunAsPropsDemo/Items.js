import React, { Component } from "react";

class Items extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAdded: false,
    };
  }

  addThing = () => {
    this.setState({ isAdded: true });
    // notify parent about the item.. name
    this.props.addItem(this.props.name);
  };
  render() {
    return (
      <div className="card col-3 offset-3">
        <h1>{this.props.name}</h1>
        <h2>{this.props.cost}</h2>
        <h5>Items in your cart : {this.props.count}</h5>
        {this.state.isAdded && <span className="btn-warning">Added</span>}
        <button onClick={this.addThing}>Add Item</button>
      </div>
    );
  }
}

export default Items;
