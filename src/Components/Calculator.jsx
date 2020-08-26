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

  handleClearClick = (e) => {
    this.setState({
      input: "",
      currentNum: "",
      prevResult: false,
      result: "0",
      displayResult: true,
    });
  };

  handleEqlClick = (e) => {
    const sum = this.state.input.replace(/x/g, "*");
    const result = eval(sum);
    this.setState({
      result: result,
      prevResult: true,
      displayResult: true,
      input: result.toString(),
      currentNum: "",
    });
  };

  handleOperatorClick = (e) => {
    const { value } = e.target;
    const { input } = this.state;

    if (input.match(/[/x\+]-?$/) && value.match(/[/x\+]/)) {
      this.setState((prevState) => ({
        input: prevState.input.replace(/[/x\+]-?$/, value),
        currentNum: "",
        displayResult: false,
        prevResult: false,
      }));
    } else {
      this.setState((prevState) => ({
        input: prevState.input + value,
        currentNum: "",
        displayResult: false,
        prevResult: false,
      }));
    }
  };

  handleClick = (e) => {
    if (this.state.prevResult === true) {
      this.setState({ input: "", prevResult: false });
    }

    const { value } = e.target;
    const { currentNum } = this.state;

    if (currentNum.length === 0 && value === ".") {
      this.setState((prevState) => ({
        input: prevState.input + "0.",
        currentNum: "0.",
        displayResult: false,
      }));
    } else if (
      !(currentNum === "0" && value === "0") &&
      !(currentNum.includes(".") && value === ".")
    ) {
      this.setState((prevState) => ({
        input: prevState.input + value,
        currentNum: prevState.currentNum + value,
        displayResult: false,
      }));
    }
  };

  render() {
    const eqlstyle = {
      height: 130,
      position: "absolute",
      background: "#0066cc",
    };
    const { input, result, displayResult } = this.state;
    return (
      <div className="container">
        <Display input={input} result={result} displayResult={displayResult} />
        <div className="buttons">
          <button
            className="ac"
            id="clear"
            value="AC"
            onClick={this.handleClearClick}
          >
            AC
          </button>
          <button
            id="divide"
            value="/"
            className="operator"
            onClick={this.handleOperatorClick}
          >
            /
          </button>
          <button
            id="multiply"
            value="x"
            className="operator"
            onClick={this.handleOperatorClick}
          >
            x
          </button>
          <button id="seven" value="7" onClick={this.handleClick}>
            7
          </button>

          <button id="eight" value="8" onClick={this.handleClick}>
            8
          </button>

          <button id="nine" value="9" onClick={this.handleClick}>
            9
          </button>

          <button
            id="subtract"
            value="-"
            className="operator"
            onClick={this.handleOperatorClick}
          >
            -
          </button>

          <button id="four" value="4" onClick={this.handleClick}>
            4
          </button>
          <button id="five" value="5" onClick={this.handleClick}>
            5
          </button>

          <button id="six" value="6" onClick={this.handleClick}>
            6
          </button>
          <button
            id="add"
            value="+"
            className="operator"
            onClick={this.handleOperatorClick}
          >
            +
          </button>

          <button id="one" value="1" onClick={this.handleClick}>
            1
          </button>
          <button id="two" value="2" onClick={this.handleClick}>
            2
          </button>
          <button id="three" value="3" onClick={this.handleClick}>
            3
          </button>
          <button
            style={eqlstyle}
            id="equals"
            value="="
            onClick={this.handleEqlClick}
          >
            =
          </button>
          <button
            className="zero"
            id="zero"
            value="0"
            onClick={this.handleClick}
          >
            0
          </button>
          <button id="decimal" value="." onClick={this.handleClick}>
            .
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
