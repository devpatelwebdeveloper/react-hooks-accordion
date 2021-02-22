import React, { useState, useRef } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";

import "./Accordion.css";

const Accordion = (props) => {
  const [activated, setActivated] = useState(false);
  const sensitive = useRef();

  const handleClick = () => {
    props.handleFeatureClick();
    setActivated(!activated);
  };

  useOnClickOutside(sensitive, () => {
    setActivated(false);
  });

  return (
    <>
      <button className={`accordion`} onClick={handleClick} ref={sensitive}>
        <img
          alt=""
          className={`accordion__icon ${activated && `highlighted`}`}
          data-src={`https://quickbooks.intuit.com/oidam/intuit/sa/en_us/quickbooks/icons/${props.icon}.svg`}
          src={`https://quickbooks.intuit.com/oidam/intuit/sa/en_us/quickbooks/icons/${props.icon}.svg`}
        />
        <div className="accordion__title">{props.title}</div>
      </button>
    </>
  );
};

export default Accordion;
