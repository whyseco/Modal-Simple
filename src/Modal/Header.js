import React, { Component } from "react";
import { Modal as ModalBoot } from "react-bootstrap";

export default class Header extends Component {
  static displayName = "Modal.Header";

  renderCloseButton = () => {
    return (
      <button
        type="button"
        className={`close float-right ${this.props.closeBtn.className}`}
        onClick={this.props.onHide}
      >
        <span>×</span>
      </button>
    );
  };
  renderHeader = () => {
    if (this.props.children) {
      return this.props.children;
    } else {
      return (
        <ModalBoot.Title className={this.props.title.className}>
          {this.props.title.text}
        </ModalBoot.Title>
      );
    }
  };
  render() {
    return (
      <ModalBoot.Header className={this.props.className}>
        {this.renderHeader()}
        {this.props.closeBtn.show ? this.renderCloseButton() : null}
      </ModalBoot.Header>
    );
  }
}
