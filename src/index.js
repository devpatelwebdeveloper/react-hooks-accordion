import React from "react";
import ReactDOM from "react-dom";
import Accordions from "./components/Accordion";

import "./styles.css";

const App = () => {
  const acc = [
    {
      title: "Bill management",
      internalContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/300",
      icon: "gift-icon-sbseg"
    },
    {
      title: "Bill management",
      internalContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/300",
      icon: "parking-icon-sbseg"
    },
    {
      title: "Bill management Process",
      internalContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/300",
      icon: "parking-icon-sbseg"
    },
    {
      title: "Bill management",
      internalContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/300",
      icon: "gift-icon-sbseg"
    },
    {
      title: "Bill management",
      internalContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/300",
      icon: "parking-icon-sbseg"
    },
    {
      title: "Bill management Process",
      internalContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/300",
      icon: "parking-icon-sbseg"
    },
    {
      title: "Bill management",
      internalContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/300",
      icon: "gift-icon-sbseg"
    },
    {
      title: "Bill management",
      internalContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/300",
      icon: "parking-icon-sbseg"
    },
    {
      title: "Bill management Process",
      internalContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/300",
      icon: "parking-icon-sbseg"
    },
    {
      title: "Bill management",
      internalContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/300",
      icon: "gift-icon-sbseg"
    },
    {
      title: "Bill management",
      internalContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/300",
      icon: "parking-icon-sbseg"
    },
    {
      title: "Bill management Process",
      internalContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/300",
      icon: "parking-icon-sbseg"
    }
  ];
  return (
    <div className="App">
      <Accordions accordionContents={acc} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
