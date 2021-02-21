import React from "react";
import "./FeatureGrid.css";

export default function FeatureGrid(props) {
  return (
    <div className="feature__grid">
      <div
        className="widget-popup-carat"
        style={{
          left: `${
            ((props.leftSide % 4) / 4 !== 0 ? (props.leftSide % 4) / 4 : 1) *
              100 -
            12.5
          }%`
        }}
      />
      <div
        className="feature__content"
        dangerouslySetInnerHTML={{ __html: props.internalContent }}
      />
      <div className="feature__image">
        <img src={props.image} alt="" />
      </div>
    </div>
  );
}
