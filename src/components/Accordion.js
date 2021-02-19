import React, { useState, useRef } from "react";
import Chevron from "./Chevron";

import FeatureGrid from "./FeatureGrid";

import "./Accordion.css";
import useOnClickOutside from "../hooks/useOnClickOutside";

const Accordion = ({ title, image, internalContent, icon }) => {
  const [active, setActive] = useState("");
  const [height, setHeight] = useState("0px");
  const [rotation, setRotation] = useState("accordion__icon");

  const content = useRef();
  const sensitive = useRef();

  const toggleAccordion = () => {
    setActive(active === "" ? "active" : "");
    setHeight(
      active === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotation(
      active === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  };

  useOnClickOutside(sensitive, () => {
    setActive("");
    setHeight("0px");
    setRotation("accordion__icon");
  });

  return (
    <>
      <div
        className={`accordion ${active}`}
        onClick={toggleAccordion}
        ref={sensitive}
      >
        <img
          alt=""
          className="accordion_icon"
          data-src={`https://quickbooks.intuit.com/oidam/intuit/sa/en_us/quickbooks/icons/${icon}.svg`}
          src={`https://quickbooks.intuit.com/oidam/intuit/sa/en_us/quickbooks/icons/${icon}.svg`}
        />
        <div className="accordion__title">{title}</div>
      </div>

      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion__content"
      >
        <FeatureGrid internalContent={internalContent} image={image} />
      </div>
    </>
  );
};

export default Accordion;
