import React, { Component } from "react";
import Items from "./Items";

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { name: "Chocolate 🍫 ", cost: 120, count: 0 },
        { name: "Candy  🍬 ", cost: 10, count: 0 },
        { name: "Chips 🥊  ", cost: 40, count: 0 },
        { name: "cookies  🍪 ", cost: 100, count: 0 },
      ],
      totalCost: 0,
      totalItems: 0,
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem = (name) => {
    let itms = this.state.items.map((item) => {
      if (name === item.name) {
        item.count++;
        this.state.totalCost += item.cost;
        this.state.totalItems++;
      }
      return item;
    });
    this.setState({
      items: itms,
      //   totalCost: this.state.totalCost,
    });
    // update state for totalcost and totalitems
  };
  render() {
    return (
      <div>
        <h5>Total items in your 💼 {this.state.totalItems}</h5>
        <h6>Cost is {this.state.totalCost}</h6>
        {this.state.items.map((i) => (
          <Items
            name={i.name}
            cost={i.cost}
            count={i.count}
            addItem={this.addItem}
          />
        ))}
      </div>
    );
  }
}

export default Parent;
