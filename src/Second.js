import React from "react";
import Modal from "./Modal/Modal";

class Second extends React.Component {
  render() {
    return (
      <div>
        <Modal
          title={{ text: "title" }}
          bodyText="something"

          //footer={false}
        />
      </div>
    );
  }
}

export default Second;
