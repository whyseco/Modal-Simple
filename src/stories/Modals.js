import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

import Modal from "../Modal";
import { State, Store } from "@sambego/storybook-state";
import logo from "./logo.svg";
import "../Exemples/HardCustom.scss";

Modal.Header.displayName = "Modal.Header";
Modal.Body.displayName = "Modal.Body";
Modal.Footer.displayName = "Modal.Footer";

const store = new Store({
  show: false
});

storiesOf("Modal", module)
  .addDecorator(withKnobs)
  .addParameters({
    props: {
      propTablesExclude: [State, "Story"]
    }
  })
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
        propDefinitions: ["Test", "string"]
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
          <Modal.Header>
          <h1 className={text("Add a class to the header title", "title")}>{text("The title in the header", "Hard Custom")}</h1>
          </Modal.Header>
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
