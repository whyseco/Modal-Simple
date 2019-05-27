import React from "react";
import { mount } from "enzyme";
import Modal from "./Modal";
import { Modal as ModalBoot } from "react-bootstrap";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import setupTests from "../setupTests";

describe("<Modal />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Modal
        show={true}
        onHide={() => {}}
        bodyText="Text from Modal"
        title={{ text: "title" }}
      />
    );
  });

  it("shows a ModalBoot component", () => {
    expect(wrapper.find(ModalBoot).length).toEqual(1);
  });
  it("shows a Header component", () => {
    expect(wrapper.find(Modal.Header).length).toEqual(1);
  });
  it("shows a Body component", () => {
    expect(wrapper.find(Modal.Body).length).toEqual(1);
  });
  it("shows a Footer component", () => {
    expect(wrapper.find(Modal.Footer).length).toEqual(1);
  });
});

describe("Modal whitout show prop", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Modal title={{ text: "title" }} className={{ header: "header-block" }} />
    );
  });
  it("shows a button", () => {
    expect(wrapper.find("button").length).toEqual(1);
  });
  it("should open the modal", () => {
    expect(wrapper.exists(".header-block")).toEqual(false);
    wrapper.find("button").simulate("click");
    expect(wrapper.exists(".header-block")).toEqual(true);
  });
});

describe("Modal button provide with custom", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Modal
        open={{
          text: "Launch",
          className: "btn-open",
          variant: "primary"
        }}
      />
    );
  });
  it("shows a button", () => {
    expect(wrapper.find("button").length).toEqual(1);
  });
  it("render a custom button", () => {
    expect(wrapper.exists(".btn-open")).toEqual(true);
    expect(wrapper.find("button").text()).toEqual("Launch");
  });
});

describe("the modal header behavior", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Modal
        show
        onHide={() => {}}
        title={{ text: "Title", className: "title-class" }}
        closeBtn={{ show: true, className: "btn-close" }}
        className={{
          header: "header-block"
        }}
      />
    );
  });
  it("has a header class", () => {
    expect(wrapper.exists(".header-block")).toEqual(true);
  });

  it("shows the close button", () => {
    expect(wrapper.exists(".btn-close")).toEqual(true);
  });

  it("renders the title ", () => {
    const findtitle = wrapper.find(".title-class").at(2);
    expect(findtitle.text()).toEqual("Title");
  });
});

describe("the modal body behavior with bodyText props", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Modal
        show
        onHide={() => {}}
        bodyText="Text-bodyText"
        className={{
          body: "body-block"
        }}
      />
    );
  });

  it("render the body content", () => {
    const content = wrapper.find(".body-block").at(2);
    expect(content.text()).toEqual("Text-bodyText");
  });
});

describe("the modal body behavior with modal children", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Modal
        show
        onHide={() => {}}
        className={{
          body: "body-block"
        }}
      >
        <strong>Text-Modal-Children</strong>
      </Modal>
    );
  });

  it("render the body content", () => {
    const content = wrapper.find("strong");
    expect(content.text()).toEqual("Text-Modal-Children");
  });
});

describe("the modal body behavior with modal-body children", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Modal
        show
        onHide={() => {}}
        className={{
          body: "body-block"
        }}
      >
        <Modal.Body>
          <h1>Text-Modal-Body</h1>
        </Modal.Body>
      </Modal>
    );
  });

  it("render the body content", () => {
    const content = wrapper.find("h1");
    expect(content.text()).toEqual("Text-Modal-Body");
  });
});

describe("the modal footer with boolean props", () => {
  let wrapper;
  let buttons;
  beforeEach(() => {
    wrapper = mount(
      <Modal
        show
        onHide={() => {}}
        footer={true}
        className={{ footer: "footer-block" }}
      />
    );
    buttons = wrapper.find("button");
  });
  it("renders the footer", () => {
    expect(wrapper.exists(".footer-block")).toEqual(true);
  });
  it("renders two buttons", () => {
    expect(buttons.length).toEqual(2);
  });
  it("render text cancel", () => {
    const btnCancel = wrapper.find(".btn-cancel").at(1);
    expect(btnCancel.text()).toEqual("Cancel");
  });
  it("render text validate", () => {
    const btnValid = wrapper.find(".btn-valid").at(1);
    expect(btnValid.text()).toEqual("Save change");
  });
});

describe("the modal footer with props", () => {
  let wrapper;
  let buttons;
  beforeEach(() => {
    const props = {
      validate: {
        text: "Validate",
        action: () => {},
        className: "btn-valid"
      },
      cancel: {
        text: "Cancel-props",
        action: () => {},
        className: "btn-cancel"
      }
    };
    wrapper = mount(
      <Modal show onHide={() => {}} className={{ footer: "footer-block" }}>
        <Modal.Footer {...props} />
      </Modal>
    );
    buttons = wrapper.find("button");
  });
  it("renders the footer", () => {
    expect(wrapper.exists(".footer-block")).toEqual(true);
  });
  it("renders two buttons", () => {
    expect(buttons.length).toEqual(2);
  });
  it("render text cancel", () => {
    const btnCancel = wrapper.find(".btn-cancel").at(1);
    expect(btnCancel.text()).toEqual("Cancel-props");
  });
  it("render text validate", () => {
    const btnValid = wrapper.find(".btn-valid").at(1);
    expect(btnValid.text()).toEqual("Validate");
  });
});
