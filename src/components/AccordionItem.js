import React, { useState, useRef } from "react";

import "./Accordion.css";
import useOnClickOutside from "../hooks/useOnClickOutside";

const Accordion = ({
  title,
  image,
  internalContent,
  icon,
  handleFeatureClick
}) => {
  const [active, setActive] = useState("");
  const [height, setHeight] = useState("0px");
  const [rotation, setRotation] = useState("accordion__icon");

  const content = useRef();
  const sensitive = useRef();

  const toggleAccordion = () => {
    setActive(active === "" ? "active" : "");
    setHeight(active === "active" ? "0px" : `700px`);
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
        onClick={handleFeatureClick}
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
    </>
  );
};

export default Accordion;
