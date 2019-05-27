import React, { Component } from "react";
import { Modal as ModalBoot } from "react-bootstrap";

export default class Body extends Component {
  static displayName = {
    name: "Body"
  };

  renderContent = () => {
    if (this.props.children) {
      return this.props.children;
    }
    if (this.props.content) {
      return (
        <ModalBoot.Body className={this.props.className}>
          {this.props.content}
        </ModalBoot.Body>
      );
    }
  };
  render() {
    return this.renderContent();
  }
}
