import React, { useRef } from "react";
import ReactDOM from "react-dom";

import Accordion from "./components/Accordion";

import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <Accordion
        title="Bill management"
        internalContent="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.</p><br/><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.</p>"
        image="https://via.placeholder.com/300"
        icon="gift-icon-sbseg"
      />
      <Accordion
        title="Bill management"
        internalContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
        image="https://via.placeholder.com/300"
        icon="parking-icon-sbseg"
      />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
