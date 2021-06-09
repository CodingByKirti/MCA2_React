import React, { Component } from "react";

export default class UnControlledForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
    this.myref = React.createRef();
  }
  
  componentDidMount = () => {
    this.myref.current.focus();
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.myref.current.value);
    console.log(this.myref.current);
    console.log(this.myref);
    this.setState({
      value: this.myref.current.value,
    });
  };
  render() {
    return (
      <div>
        you have typed {this.state.value}
        <form action="" onSubmit={this.handleSubmit}>
          Name : <input type="text" />
          Password : <input type="text" ref={this.myref} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
