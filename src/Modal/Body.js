import React, { Component } from "react";
import { Modal as ModalBoot } from "react-bootstrap";

export default class Body extends Component {
  static displayName = {
    name: "Body"
  };

  renderContent = () => {
    if (this.props.content) {
      return (
        <ModalBoot.Body className={this.props.className}>
          {this.props.content}
        </ModalBoot.Body>
      );
    } else return this.props.children;
  };
  render() {
    return this.renderContent();
  }
}
