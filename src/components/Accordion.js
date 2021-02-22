import React, { useState, useRef, useEffect } from "react";
import Accordion from "./AccordionItem";
import FeatureGrid from "./FeatureGrid";
import useOnClickOutside from "../hooks/useOnClickOutside";

import "./Accordion.css";

const Accordions = ({ accordionContents }) => {
  const [activeFeature, setActiveFeature] = useState(null);
  const [featureRow, setFeatureRow] = useState(null);
  const [activeId, setActiveId] = useState(null);
  const [filter, setFilter] = useState("all");
  const [filteredFeature, setFilteredFeature] = useState([]);
  const sensitive = useRef();

  //Rounding
  const roundToX = (num, x) => {
    return Math.ceil(num / x) * x;
  };

  // Click to open content

  const handleFeatureClick = (featureId, index) => {
    const itemRow = roundToX(index + 1, 4) / 4;
    if (featureId === activeFeature) {
      setActiveFeature(null);
      setFeatureRow(null);
    } else {
      setActiveFeature(featureId);
      setFeatureRow(itemRow);
      setActiveId(index);
    }
  };

  //useEffects
  useEffect(() => {
    setFilteredFeature(accordionContents);
  }, []);

  useEffect(() => {
    setFilteredFeature([]);

    const filtered = accordionContents.map((p) => ({
      ...p,
      filtered: p.category.includes(filter)
    }));

    const temp = [];
    filtered.map((item) => item.filtered === true && temp.push(item));
    setFilteredFeature(temp);
  }, [filter]);

  useOnClickOutside(sensitive, handleFeatureClick);

  return (
    <>
      <div className="portfolio__labels">
        <a href="/#" active={filter === "all"} onClick={() => setFilter("all")}>
          All
        </a>
        <a
          href="/#"
          active={filter === "cat1"}
          onClick={() => setFilter("cat1")}
        >
          cat1
        </a>
        <a
          href="/#"
          active={filter === "cat2"}
          onClick={() => setFilter("cat2")}
        >
          cat2
        </a>
        <a
          href="/#"
          active={filter === "cat3"}
          onClick={() => setFilter("cat3")}
        >
          cat3
        </a>
      </div>

      <div ref={sensitive}>
        {filteredFeature.map((accordion, index) => {
          return (
            <>
              <Accordion
                key={`feature-${index}`}
                title={accordion.title}
                internalContent={accordion.internalContent}
                image={accordion.image}
                icon={accordion.icon}
                index={index}
                length={filteredFeature.length}
                handleFeatureClick={() => {
                  handleFeatureClick(accordion, index);
                }}
              />

              {(index % 4 === 3 || index === filteredFeature.length - 1) &&
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
