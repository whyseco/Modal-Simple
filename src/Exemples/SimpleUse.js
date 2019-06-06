import React from "react";
import Modal from "../Modal";

class SimpleUse extends React.Component {
  render() {
    return <Modal title={{ text: "title" }} bodyText="something" />;
  }
}

export default SimpleUse;
