import React, { Component } from "react";
import { Modal as ModalBoot } from "react-bootstrap";
import PropTypes from "prop-types";

export default class Body extends Component {
  static displayName = {
    name: "Body"
  };

  renderContent = () => {
    return (
      <ModalBoot.Body className={this.props.className}>
        {this.props.children}
      </ModalBoot.Body>
    );
  };
  render() {
    return this.renderContent();
  }
}
Body.propTypes = {
  children: PropTypes.node
};
