import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-110.0, -18.0, 0],
        center: [-5, -3],
        scale: 1100
      }}
      style = {{width: '100%', height: '100%'}}
    >
      <Geographies
        geography="/features.json"
        fill="rebeccapurple"
        stroke="#FFFFFF"
        strokeWidth={0.7}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[100.4, 13.8]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#ffffff",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#ffffff">
          {"Ratburana, Bangkok"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
