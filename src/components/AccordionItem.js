import React, { useState } from "react";

import "./Accordion.css";

const Accordion = (props) => {
  const [activated, setActivated] = useState(false);

  const handleClick = () => {
    props.handleFeatureClick();
    setActivated(!activated);
  };

  return (
    <>
      <div className={`accordion`} onClick={handleClick} ref={props.ref}>
        <img
          alt=""
          className={`accordion__icon ${activated && `highlighted`}`}
          data-src={`https://quickbooks.intuit.com/oidam/intuit/sa/en_us/quickbooks/icons/${props.icon}.svg`}
          src={`https://quickbooks.intuit.com/oidam/intuit/sa/en_us/quickbooks/icons/${props.icon}.svg`}
        />
        <div className="accordion__title">{props.title}</div>
      </div>
    </>
  );
};

export default Accordion;
