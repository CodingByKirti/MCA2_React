import React, { Component } from "react";

export class Likes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: 0,
    };
    this.incLikes = this.incLikes.bind(this);
  }

  incLikes() {
    this.setState({
      likes: this.state.likes + 1,
    });
  }
  render() {
    return (
      <div>
        <h1>Number Of Likes are {this.state.likes}</h1>
        <button onClick={() => this.incLikes()}> Press 👍 </button>
      </div>
    );
  }
}

export default Likes;
