import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import ReactToolTip from "react-tooltip";
import React, { useState } from "react";
import { scaleQuantile } from "d3-scale";

import percentOf from "../../utils/percentOf";
import capitalizeZone from "../../utils/capitalizeZone";
import mapConstants from "../constantvalues/mapConstants";

//Geography styles to be applied to map
const geographyStyle = {
  default: {
    transition: "all 750ms",
    outline: "none",
  },
  hover: {
    // fill : "#ccc",
    transition: "all 750ms",
    outline: "none",
    stroke: "blue",
    strokeWidth: "20",
    cursor: "pointer",
  },
  pressed: {
    //fill: mapConstants.DEFAULT_COLOR,
    stroke: "yellow",
    strokeWidth: "20",
    outline: "none",
  },
};

//Generic Component to Generate Choropleth India and State Maps
function ChoroplethMap(props) {
  const [toolTipContent, setTooltipContent] = useState("");
  //To generate tooltip on hovering over a state - specific rules applied for each group of criteria
  const onMouseEnter = (geo, current = { value: "NA" }) => {
    return () => {
      setTooltipContent(
        props.type === mapConstants.MAP_TYPE_COUNTRY
          ? `${geo.properties.st_nm}: ` +
              (!props.isRate
                ? `${current.value} (${percentOf(
                    current.value,
                    props.totalCases[0][current.criteria.toLowerCase()]
                  )} % of total ${current.criteria} in the country)`
                : `${current.value}%`)
          : `${geo.properties.district}: ` +
              (!props.isRate && !props.isZonal
                ? `${current.value} (${percentOf(
                    current.value,
                    props.totalCases[0][current.criteria.toLowerCase()]
                  )} % of total ${current.criteria} in the state)`
                : !props.isZonal
                ? `${current.value}%`
                : `${capitalizeZone(current.value)}`)
      );
    };
  };

  //remove the tooltip when mouse moved out
  const onMouseLeave = () => {
    setTooltipContent("");
  };

  //append 1 to end of set created to remove repeating values for better visualization and make lower values
  //show up as lighter shades on choropleths
  const domainValues = Array.from(new Set(props.data.map((d) => d.value)));
  if (domainValues.length === 1) {
    domainValues.push(domainValues[0] + 1);
  }

  /** Scale colors as per available list to the number of cases */
  const colorScale = scaleQuantile()
    .domain(domainValues)
    .range(props.COLOR_RANGE);
  return (
    <>
      <ReactToolTip>{toolTipContent}</ReactToolTip>
      <ComposableMap
        projectionConfig={props.MAP_PROJECTION}
        projection={mapConstants.MAP_PROJECTION_TYPE}
        width={6000}
        height={6000}
        data-tip=""
      >
        <Geographies geography={props.TOPO_JSON}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const currentState = props.data.find((s) =>
                props.type === mapConstants.MAP_TYPE_COUNTRY
                  ? s.state === geo.id
                  : s.state === geo.properties.district
              );
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={
                    currentState
                      ? props.isZonal
                        ? currentState.value.toLowerCase()
                        : colorScale(currentState.value)
                      : props.DEFAULT_COLOR
                  }
                  stroke={
                    props.type === mapConstants.MAP_TYPE_COUNTRY
                      ? currentState && props.hoverState === currentState.id
                        ? "yellow"
                        : "none"
                      : currentState && props.hoverDistrict === currentState.id
                      ? "yellow"
                      : "none"
                  }
                  strokeWidth={
                    props.type === mapConstants.MAP_TYPE_COUNTRY
                      ? currentState && props.hoverState === currentState.id
                        ? "20"
                        : "none"
                      : currentState && props.hoverDistrict === currentState.id
                      ? "20"
                      : "none"
                  }
                  style={geographyStyle}
                  onMouseEnter={onMouseEnter(geo, currentState)}
                  onMouseLeave={onMouseLeave}
                  onClick={() => {
                    currentState && props.type === mapConstants.MAP_TYPE_COUNTRY
                      ? props.onStateClick(currentState.id)
                      : props.onStateClick(mapConstants.MAP_CLICK_NO_EFFECT);
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </>
  );
}

export default ChoroplethMap;
