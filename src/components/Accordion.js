import React, { useState } from "react";
import Accordion from "./AccordionItem";
import FeatureGrid from "./FeatureGrid";
import useOnClickOutside from "../hooks/useOnClickOutside";

import "./Accordion.css";

const Accordions = ({ accordionContents }) => {
  const [activeFeature, setActiveFeature] = useState(null);
  const [featureRow, setFeatureRow] = useState(null);
  const [activeId, setActiveId] = useState(null);

  const roundToX = (num, x) => {
    return Math.ceil(num / x) * x;
  };

  const handleFeatureClick = (featureId, index) => {
    const itemRow = roundToX(index + 1, 4) / 4;
    console.log(featureId);
    console.log(`clicked ${featureId}`);

    if (featureId === activeFeature) {
      setActiveFeature(null);
      setFeatureRow(null);
    } else {
      setActiveFeature(featureId);
      setFeatureRow(itemRow);
      setActiveId(index);
    }
  };

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
                index={index}
                length={accordionContents.length}
                handleFeatureClick={() => {
                  handleFeatureClick(accordion, index);
                }}
              />

              {(index % 4 === 3 || index === accordionContents.length - 1) &&
                roundToX(index + 1, 4) / 4 === featureRow && (
                  <div className="accordion__content">
                    <FeatureGrid
                      internalContent={activeFeature.internalContent}
                      image={activeFeature.image}
                      leftSide={activeId + 1}
                    />
                  </div>
                )}
            </>
          );
        })}
      </div>
    </>
  );
};

export default Accordions;
