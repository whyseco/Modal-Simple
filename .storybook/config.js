import {
  configure,
  addParameters,
  setAddon,
  addDecorator
} from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";
import "../src/stories/bootstrap.css";
const { withPropsTable } = require("storybook-addon-react-docgen");

setAddon(JSXAddon);

addDecorator(withPropsTable);

addParameters({
  options: {
    name: "Modal-Simple"
  }
});

function loadStories() {
  require("../src/stories");
}

configure(loadStories, module);
