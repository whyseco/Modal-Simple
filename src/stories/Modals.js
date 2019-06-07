import React from "react";

import { storiesOf, setAddon } from "@storybook/react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

import Header from "../Modal/Header";
import Body from "../Modal/Body";
import Footer from "../Modal/Footer";
import { Modal as ModalBoot } from "react-bootstrap";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { State, Store } from "@sambego/storybook-state";
import logo from "./logo.svg";
import "../Exemples/HardCustom.scss";

class Modal extends React.Component {
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
          if (child.type.displayName.name === "Body"||
          child.type.displayName === "Modal.Body") {
            render.bodyContent = child;
          } else if (child.type.displayName.name === "Footer"||
          child.type.displayName === "Modal.Footer") {
            render.footerContent =
              child || (this.props.cancel && this.props.validate);
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

Modal.Header.displayName = "Modal.Header";
Modal.Body.displayName = "Modal.Body";
Modal.Footer.displayName = "Modal.Footer";

const store = new Store({
  show: false
});

storiesOf("Modal", module)
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      header: false,
      propTablesExclude: [State]
    })
  )
  .addWithJSX(
    "Simple use",
    () => (
      <Modal
        title={{ text: text("The text in the header ", "title") }}
        bodyText={text("The text in the body", "some text here")}
        footer={boolean("Send false if you don't need a footer", true)}
      />
    ),
    {
      props: {
        propDefinitions:["Test","string"]
      }
    }
  )
  .addWithJSX("Simple custom", () => (
    <Modal
      open={{
        text: text("The text inside the button ", "Open me"),
        className: text(
          "You can add a class to the button for css ",
          "btn-toggle"
        ),
        variant: text(
          "You can also use the default variant provide by bootstrap ",
          "secondary"
        )
      }}
      closeBtn={{
        show: boolean("with the close button ", true)
      }}
      title={{
        text: text("The title in the header ", "title")
      }}
    >
      <strong>{text("Without “Modal.body” ", "strong text")}</strong>
      <Modal.Footer
        validate={{
          text: text("The text in the button", "Validate"),
          variant: text(
            "Use the default color of bootstrap with variant prop",
            "primary"
          )
        }}
      />
    </Modal>
  ))
  .addWithJSX("Hard custom", () => (
    <div>
      <button
        className="open"
        onClick={() => store.set({ show: true })}
        key="button"
      >
        OPEN
      </button>
      <State store={store}>
        <Modal
          show={boolean("If true, open the modal", store.get("show"))}
          onHide={() => store.set({ show: false })}
          closeBtn={{
            show: boolean("With the close button ", true),
            className: text("Add a class to the close button", "btn-close")
          }}
          title={{
            text: text("The title in the header", "title"),
            className: text("Add a class to the header title", "title")
          }}
          className={{
            modal: text(
              "If you need to,you can add a class to the modal container",
              "modal-block-hard-custom"
            ),
            header: text(
              "If you need to,you can add a class to the header container",
              "header-block"
            ),
            footer: text(
              "If you need to,you can add a class to the footer container",
              "footer-block"
            )
          }}
        >
          <Modal.Body>
            <div
              className={text(
                "add a class to the body container",
                "d-flex flex-row body-block"
              )}
            >
              <img src={logo} alt="logo" />
              <img src={logo} alt="logo" />
              test
            </div>
          </Modal.Body>
          <Modal.Footer
            validate={{
              text: text("The text in the right button", "Validate"),
              action: () => store.set({ show: false }),
              className: text("Add a class to the right button", "btn-valid")
            }}
            cancel={{
              text: text("The text in the left button", "Close"),
              action: () => store.set({ show: false }),
              className: text("Add a class to the left button", "btn-cancel")
            }}
          />
        </Modal>
      </State>
    </div>
  ));
