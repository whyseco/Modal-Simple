import React from "react";
import "./Introduction.scss";
import { storiesOf } from "@storybook/react";

const modal =
  "https://raw.githubusercontent.com/veensy/Modal-Simple/master/public/images/modal-1.png";
const github = "https://github.com/veensy/Modal-Simple";
const codesandbox = "https://codesandbox.io/s/modalsimple-dsm09";
const bootstrap =
  "https://getbootstrap.com/docs/4.3/getting-started/introduction/";

export default function Introduction() {
  return (
    <div className="started">
      <div className="welcome">
        <h1 className="title">Welcome to Modal-Simple</h1>
        <h4 className="description">
          This is a simple quick and customizable modal component that you can
          use in your App. The modal is based on bootstrap.
        </h4>
      </div>
      <div className="introduction paragraph">
        <h2 className="sub-title">Introduction</h2>
        <div className="content">
          <h3 className="link">
            <a href={github} className="link-item" aria-label="Github" target="_blank" rel="noopener noreferrer">
              Source
            </a>{" "}
            |{" "}
            <a href={codesandbox} className="link-item" aria-label="CodeSandBox" target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          </h3>
          <img className="exemple-img" src={modal} alt="exemple modal" />
          <br />
        </div>
      </div>
      <div className="installation paragraph">
        <h2 className="sub-title">Installation</h2>
        <div className="content">
          <h4>Install with npm or yarn : </h4>
          <br />
          <code> npm i modal-simple react-bootstrap</code>
          <br />
          or
          <br />
          <code> yarn add modal-simple react-bootstrap</code>
        </div>
      </div>
      <div className="prerequisite paragraph">
        <h2 className="sub-title">Prerequisite</h2>
        <div className="content">
          <h4>
            Modal-Simple use bootstrap Css, so you need to add the stylesheet
            into your <span className="balise">{"<head>"}</span> before all
            other stylesheets to load it :{" "}
          </h4>
          <br />
          <code className="link">
            <a href={bootstrap} target="_blank" rel="noopener noreferrer">
              Link to the stylesheet{" "}
            </a>
          </code>
        </div>
      </div>
    </div>
  );
}

storiesOf("Modal-Simple", module).add("Getting started", () => Introduction());
