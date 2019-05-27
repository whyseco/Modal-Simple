import React from "react";
import { findDOMNode } from "react-dom";
import ReactTestUtils from "react-dom/test-utils";
import { shallow, mount, ReactWrapper } from "enzyme";
import App from "../App";
import Modal from "./Modal";
import { Modal as ModalBoot } from "react-bootstrap";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import setupTests from "../setupTests";

describe("<Modal />", () => {
  let wrapped;
  beforeEach(() => {
    wrapped = shallow(
      <Modal
        show={true}
        onHide={() => {}}
        bodyText="Text from Modal"
        footer={true}
      />
    );
  });

  it("shows a ModalBoot component", () => {
    expect(wrapped.find(ModalBoot).length).toEqual(1);
  });
  it("shows a Header component", () => {
    expect(wrapped.find(Header).length).toEqual(1);
  });
  it("shows a Body component", () => {
    expect(wrapped.find(Body).length).toEqual(1);
  });
  it("shows a Footer component", () => {
    expect(wrapped.find(Footer).length).toEqual(1);
  });
});

describe("the modal header behavior", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Modal
        show
        onHide={() => {}}
        header={{ title: "Title", class: "title-class" }}
        closeBtn={{ show: true, class: "btn-close" }}
      />
    );
  });
  it("shows the header class", () => {
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

describe("the modal body behavior", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Modal show onHide={() => {}}>
        <strong>Message content</strong>
      </Modal>
    );
  });

  it("render the body content", () => {
    const content = wrapper.find("strong");
    expect(content.text()).toEqual("Message content");
  });
});

describe("the modal footer", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });
  let wrapper;
  let buttons;
  beforeEach(() => {
    const props = {
      validate: {
        text: "Validate",
        action: () => {},
        class: "btn-valid"
      },
      cancel: {
        text: "Cancel",
        action: () => {},
        class: "btn-cancel"
      }
    };
    wrapper = mount(<Footer>{props}</Footer>);
    buttons = wrapper.find("button");
  });
  it("renders two buttons", () => {
    console.log(buttons.debug())
    expect(buttons.length).toEqual(2);
  });
  it("render text validate", () => {
    const btnValid = wrapper.find(".btn-valid")
    expect(btnValid.text())
  it("render text validate", () => {
    expect(buttons.text()).toEqual("Validate");
  });
});
