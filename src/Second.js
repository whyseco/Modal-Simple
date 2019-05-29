import React from "react";
import Modal from "./Modal/Modal";

class Second extends React.Component {
  render() {
    return <Modal title={{ text: "title" }} bodyText="something" />;
  }
}

export default Second;
