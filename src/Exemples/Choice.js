import React, { Component } from "react";
import HardCustom from "./HardCustom";
import SimpleCustom from "./SimpleCustom";
import SimpleUse from "./SimpleUse";

export default class Choice extends Component {
  render() {
    return (
      <div>
        <HardCustom />
        <SimpleCustom />
        <SimpleUse />
      </div>
    );
  }
}
