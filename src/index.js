import React, { useRef } from "react";
import ReactDOM from "react-dom";

import Accordion from "./components/Accordion";

import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <Accordion title="What is your return policy?">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Accordion>
      <Accordion title="What is your return policy?">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Accordion>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
