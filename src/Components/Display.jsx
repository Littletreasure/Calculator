import React, { Component } from "react";
import "../css/App.css";

class Display extends Component {
  state = {};
  render() {
    const { input, result, displayResult } = this.props;
    return (
      <div className="display" id="display">
        <p>{displayResult ? result : input}</p>
      </div>
    );
  }
}
export default Display;
