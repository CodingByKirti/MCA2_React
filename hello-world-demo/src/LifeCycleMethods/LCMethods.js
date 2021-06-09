import React, { Component } from "react";
import LCChild from "./LCChild";

export class LCMethods extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 1,
      mount: false,
    };
    console.log("Constructor Called");
  }

  componentWillMount() {
    console.log("Component will mount now");
  }
  componentDidMount() {
    console.log("Component Mounted Successfully");
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("\ncomponent will update : " + nextState.value);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      "component updated , prev state was " +
        prevState.value +
        "but its now " +
        this.state.value
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.value == 10) {
      console.log("Dont update the comp on val 10 ");
      return false;
    } else {
      console.log(" update the comp for val other than 10");
      return true;
    }
  }
  static getDerivedStateFromProps(props, state) {
    console.log(" change the value of state here , otherwise return null");
    // state.value = 111;
    return null;
  }
  componentWillUnmount() {
    console.log("\n component is unmounted from DOM");
  }
  disp = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };
  mountIt = () => {
    this.setState({
      mount: true,
    });
  };
  unmountIt = () => {
    this.setState({
      mount: false,
    });
  };
  //   ErrorComp = () => <>{new Error()}</>;
  //   componentDidCatch(error, errorInfo) {
  //     console.log("oops something went wrong, plz try again after sometime");
  //   }
  render() {
    return (
      <div>
        <h1>{this.state.value} </h1>
        <button onClick={() => this.disp()}>Click Here</button> <br />
        <button onClick={() => this.mountIt()} disabled={this.state.mount}>
          Mount Child
        </button>
        <button onClick={() => this.unmountIt()} disabled={!this.state.mount}>
          UnMount Child
        </button>
        {this.state.mount ? <LCChild /> : null}
        {/* {this.ErrorComp()} */}
      </div>
    );
  }
}

export default LCMethods;
