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
    let result = {};
    let render = {};
    if (this.props.children && this.props.children.length) {
      this.props.children.map((child, idx) => {
        return (result = this.checkType(child, render));
      });
    } else {
      if (this.props.children) {
        return (result = this.checkType(this.props.children, render));
      }
    }
    return result;
  };

  checkType = (child, render) => {
    if (child) {
      switch (typeof child.type) {
        case "function":
          if (child.type.displayName === "Modal.Body") {
            render.bodyContent = child;
          } else if (child.type.displayName === "Modal.Header") {
            render.header = child.props.children;
          } else if (child.type.displayName === "Modal.Footer") {
            render.footerContent = {
              cancel: child.props.cancel,
              validate: child.props.validate
            };
          }
          break;
        default:
          render.content = child;
          break;
      }
      return render;
    }
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
          dialogClassName={this.props.dialogClassName}
        >
          {(render.header || this.props.title) && (
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
            >
              {render.header}
            </Header>
          )}
          {(render.content || this.props.bodyText) && (
            <Body className={this.props.className.body}>
              {render.content || this.props.bodyText}
            </Body>
          )}
          {render.bodyContent}
          {(render.footerContent || this.props.footer) && (
            <Footer
              footer={this.props.footer}
              onHide={this.props.onHide || this.handleShow}
              className={this.props.className.footer}
              cancel={
                render.footerContent
                  ? render.footerContent.cancel
                  : this.props.cancel
              }
              validate={
                render.footerContent
                  ? render.footerContent.validate
                  : this.props.validate
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
