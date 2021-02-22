import React, { useState, useEffect } from "react";
import Accordion from "./AccordionItem";
import FeatureGrid from "./FeatureGrid";

import "./Accordion.css";

const Accordions = ({ accordionContents }) => {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);
  const [activeFeature, setActiveFeature] = useState(null);
  const [featureRow, setFeatureRow] = useState(null);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    setProjects(accordionContents);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = accordionContents.map((p) => ({
      ...p,
      filtered: p.category.includes(filter)
    }));
    setProjects(filtered);
  }, [filter]);

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

  console.table(projects);

  return (
    <>
      <div className="portfolio__labels">
        <a href="/#" active={filter === "all"} onClick={() => setFilter("all")}>
          All
        </a>
        <br />
        <a
          href="/#"
          active={filter === "cat1"}
          onClick={() => setFilter("cat1")}
        >
          cat1
        </a>
        <br />
        <a
          href="/#"
          active={filter === "cat2"}
          onClick={() => setFilter("cat2")}
        >
          cat2
        </a>
        <br />
        <a
          href="/#"
          active={filter === "category"}
          onClick={() => setFilter("category")}
        >
          category
        </a>
        <br />
        <br />
        <br />
        <br />
      </div>
      {projects.map((accordion, index) => {
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
              id={`feature-${accordion.title}`}
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
    </>
  );
};

export default Accordions;
