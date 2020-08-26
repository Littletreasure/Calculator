import React, { Component } from "react";
import Display from "./Display";
import "../css/App.css";

class Calculator extends Component {
  state = {
    input: "",
    currentNum: "",
    result: "0",
    prevResult: false,
    displayResult: true,
  };
  render() {
    return (
      <div className="container">
        <Display />
        <p>Calculator</p>
      </div>
    );
  }
}

export default Calculator;
