import React from "react";
import ReactDOM from "react-dom";
import Accordions from "./components/Accordion";

import "./styles.css";

const App = () => {
  const features = [
    {
      category: ["all", "cat1", "cat2"],
      title: "Bill management 1",
      internalContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/300",
      icon: "gift-icon-sbseg"
    },
    {
      category: ["all", "cat1", "cat2"],
      title: "Bill management 2",
      internalContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/300",
      icon: "clock-fill-icon-sbseg"
    },
    {
      category: ["all", "cat1", "cat3"],
      title: "Bill management Process",
      internalContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/300",
      icon: "facebook-fill-icon-sbseg"
    },
    {
      category: ["all", "cat1", "cat2"],
      title: "Bill management 3",
      internalContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/300",
      icon: "automate-icon-sbseg"
    },
    {
      category: ["all", "cat1", "cat3"],
      title: "Bill management 4",
      internalContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/300",
      icon: "favorite-fill-icon-sbseg"
    },
    {
      category: ["all", "cat1", "cat2"],
      title: "Bill management Process 5",
      internalContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/300",
      icon: "parking-icon-sbseg"
    },
    {
      category: ["all", "cat1", "cat2"],
      title: "Bill management 6",
      internalContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/300",
      icon: "gift-icon-sbseg"
    },
    {
      category: ["all", "cat1", "cat3"],
      title: "Bill management 7",
      internalContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/300",
      icon: "parking-icon-sbseg"
    },
    {
      category: ["all", "cat1", "cat2"],
      title: "Bill management Process 8",
      internalContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/300",
      icon: "parking-icon-sbseg"
    },
    {
      category: ["all", "cat1", "cat3"],
      title: "Bill management 10",
      internalContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/300",
      icon: "gift-icon-sbseg"
    },
    {
      category: ["all", "cat1", "cat2"],
      title: "Bill management 11",
      internalContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/300",
      icon: "parking-icon-sbseg"
    },
    {
      category: ["all", "cat1", "cat3"],
      title: "Bill management Process 12",
      internalContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/300",
      icon: "parking-icon-sbseg"
    }
  ];

  return (
    <div className="App">
      <Accordions accordionContents={features} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
