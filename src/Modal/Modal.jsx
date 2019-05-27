/* eslint-disable array-callback-return */
import React, { Component } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { Modal as ModalBoot } from "react-bootstrap";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

class Modal extends Component {
  static Header = Header;
  static Body = Body;
  static Footer = Footer;
  state = { show: false };

  renderToggle = () => {
    if (typeof this.props.show === "undefined") {
      return (
        <Button
          variant={this.props.open.variant}
          className={this.props.open.className}
          onClick={this.handleShow}
        >
          {this.props.open.text}
        </Button>
      );
    }
  };
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    let bodyContent;
    let content;
    let footerContent;
    if (this.props.children && this.props.children.length) {
      this.props.children.map((child, idx) => {
        switch (typeof child.type) {
          case "function":
            if (child.type.displayName.name === "Body") {
              bodyContent = child;
            } else if (child.type.displayName.name === "Footer") {
              footerContent =
                child || (this.props.cancel && this.props.validate);
            }
            break;
          default:
            content = child;
            break;
        }
      });
    } else {
      if (this.props.children) {
        switch (typeof this.props.children.type) {
          case "function":
            if (this.props.children.type.displayName.name === "Body") {
              bodyContent = this.props.children;
            } else if (this.props.children.type.displayName.name === "Footer") {
              footerContent =
                this.props.children ||
                (this.props.cancel && this.props.validate);
            }
            break;
          default:
            content = this.props.children;
            break;
        }
      }
    }
    return (
      <div>
        {this.renderToggle()}
        <ModalBoot
          show={this.props.show || this.state.show}
          onHide={this.props.onHide || this.handleShow}
          className={this.props.className.modal}
        >
          {this.props.title && (
            <Header
              className={this.props.className.header}
              title={{
                text: this.props.title ? this.props.title.text : null,
                className: this.props.title ? this.props.title.className : null
              }}
              closeBtn={{
                show: this.props.closeBtn.show,
                className: this.props.closeBtn.className
              }}
              onHide={this.props.onHide || this.handleShow}
              bodyText={this.props.bodyText}
            />
          )}

          {(content || bodyContent || this.props.bodyText) && (
            <Body
              className={this.props.className.body}
              content={content || this.props.bodyText}
            >
              {bodyContent}
            </Body>
          )}

          {(footerContent || this.props.footer) && (
            <Footer
              footer={this.props.footer}
              onHide={this.props.onHide || this.handleShow}
              className={this.props.className.footer}
            >
              {footerContent ? footerContent.props : null}
            </Footer>
          )}
        </ModalBoot>
      </div>
    );
  }
}
Modal.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
  title: PropTypes.shape({
    text: PropTypes.string,
    className: PropTypes.string
  }),
  bodyText: PropTypes.string,
  closeBtn: PropTypes.shape({
    show: PropTypes.bool,
    className: PropTypes.string
  }),
  children: PropTypes.node,
  className: PropTypes.shape({
    header: PropTypes.string,
    body: PropTypes.string,
    footer: PropTypes.string
  })
};

Modal.defaultProps = {
  open: {
    text: "Launch",
    className: "btn-open",
    variant: "primary"
  },
  className: {
    modal: "modal-block",
    header: "header-block",
    body: "body-block",
    footer: "footer-block"
  },
  header: { className: "title" },
  closeBtn: { show: true, className: "btn-close" },
  footer: true
};

export default Modal;
