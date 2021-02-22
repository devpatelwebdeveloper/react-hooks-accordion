import React, { useState } from "react";

import "./Accordion.css";

const Accordion = ({ title, icon, handleFeatureClick }) => {
  const [activated, setActivated] = useState(false);

  const handleClick = () => {
    handleFeatureClick();
    setActivated(!activated);
  };

  return (
    <>
      <div className={`accordion`} onClick={handleClick}>
        <img
          alt=""
          className={`accordion__icon ${activated && `highlighted`}`}
          data-src={`https://quickbooks.intuit.com/oidam/intuit/sa/en_us/quickbooks/icons/${icon}.svg`}
          src={`https://quickbooks.intuit.com/oidam/intuit/sa/en_us/quickbooks/icons/${icon}.svg`}
        />
        <div className="accordion__title">{title}</div>
      </div>
    </>
  );
};

export default Accordion;
