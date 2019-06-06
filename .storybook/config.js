import { configure, addParameters, setAddon } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";
import "bootstrap/dist/css/bootstrap.css";

setAddon(JSXAddon);

addParameters({
  options: {
    name: "Modal-Simple"
  }
});

function loadStories() {
  require("../src/stories");
}

configure(loadStories, module);
