import React from "react";
import Accordion from "./Accordion";

import "./Accordion.css";

const Accordions = ({ accordionContents }) => {
  return (
    <>
      <div>
        {accordionContents.map((accordion, index) => {
          return (
            <>
              <Accordion
                key={`feature-${index}`}
                title={accordion.title}
                internalContent={accordion.internalContent}
                image={accordion.image}
                icon={accordion.icon}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Accordions;
