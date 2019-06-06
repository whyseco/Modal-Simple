/* eslint-disable array-callback-return */
import React, { Component } from "react";
import Header from "./Modal/Header";
import Body from "./Modal/Body";
import Footer from "./Modal/Footer";
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
  getProps = () => {
    let render = {};
    if (this.props.children && this.props.children.length) {
      this.props.children.map((child, idx) => {
        switch (typeof child.type) {
          case "function":
            if (child.type.displayName.name === "Body") {
              render.bodyContent = child;
            } else if (child.type.displayName.name === "Footer") {
              render.footerContent =
                child || (this.props.cancel && this.props.validate);
            }
            break;
          default:
            render.content = child;
            break;
        }
      });
    } else {
      if (this.props.children) {
        switch (typeof this.props.children.type) {
          case "function":
            if (this.props.children.type.displayName.name === "Body") {
              render.bodyContent = this.props.children;
            } else if (this.props.children.type.displayName.name === "Footer") {
              render.footerContent =
                this.props.children ||
                (this.props.cancel && this.props.validate);
            }
            break;
          default:
            render.content = this.props.children;
            break;
        }
      }
    }
    return render;
  };
  render() {
    const render = this.getProps();
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

          {(render.content || this.props.bodyText) && (
            <Body
              className={this.props.className.body}
              content={render.content || this.props.bodyText}
            />
          )}
          {render.bodyContent}

          {(render.footerContent || this.props.footer) && (
            <Footer
              footer={this.props.footer}
              onHide={this.props.onHide || this.handleShow}
              className={this.props.className.footer}
              footerContent={
                render.footerContent ? render.footerContent.props : null
              }
            />
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
  open: PropTypes.shape({
    text: PropTypes.string,
    className: PropTypes.string,
    variant: PropTypes.string
  }),
  bodyText: PropTypes.string,
  closeBtn: PropTypes.shape({
    show: PropTypes.bool,
    className: PropTypes.string
  }),
  children: PropTypes.node,
  footer: PropTypes.bool,
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
  closeBtn: { show: true, className: "btn-close" },
  footer: true
};

export default Modal;
