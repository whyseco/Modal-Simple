import React, { Component } from "react";
import App from "./App";
import First from "./First";
import Second from "./Second";

export default class Choice extends Component {
  render() {
    return (
      <div>
        <App />
        <First />
        <Second />
      </div>
    );
  }
}
