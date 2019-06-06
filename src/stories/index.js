import React from "react";
import Introduction from "./Introduction";
import Modals  from "./Modals"

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Introduction />
        <Modals />
      </div>
    );
  }
}
