import { configure, addParameters } from "@storybook/react";
import "bootstrap/dist/css/bootstrap.css";

addParameters({
  options: {
    name: "Modal-Simple"
  }
});

function loadStories() {
  require("../src/stories");
}

configure(loadStories, module);
