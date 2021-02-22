import React, { useState, useRef } from "react";

import "./Accordion.css";
import useOnClickOutside from "../hooks/useOnClickOutside";

const Accordion = ({ title, icon, handleFeatureClick }) => {
  const [active, setActive] = useState(false);
  const sensitive = useRef();

  useOnClickOutside(sensitive, () => {
    setActive(false);
  });

  const handleClick = () => {
    handleFeatureClick();
    setActive(!active);
  };

  return (
    <>
      <div
        className={`accordion feature-${title.replace(/\s/g, "")}`}
        onClick={handleClick}
        ref={sensitive}
      >
        <img
          alt=""
          className={`accordion__icon ${active && `highlighted`}`}
          data-src={`https://quickbooks.intuit.com/oidam/intuit/sa/en_us/quickbooks/icons/${icon}.svg`}
          src={`https://quickbooks.intuit.com/oidam/intuit/sa/en_us/quickbooks/icons/${icon}.svg`}
        />
        <div className="accordion__title">{title}</div>
      </div>
    </>
  );
};

export default Accordion;
