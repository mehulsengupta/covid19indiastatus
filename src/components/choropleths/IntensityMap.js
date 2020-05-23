import React, { useState, useEffect } from "react";
import { usePromiseTracker } from "react-promise-tracker";
import LoadingOverlay from "react-loading-overlay";

import tableHeader from "../../components/constantvalues/tableHeaders";
import mapConstants from "../constantvalues/mapConstants";
import CriteriaDropDown from "../common/CriteriaDropDowns";
import LinearGradient from "./LinearGradient";
import StateIntensityMap from "../choropleths/StateIntensityMap";
import ChoroplethMap from "../common/ChoroplethMap";
import DailyChangeGraph from "../graphs/DailyChangeGraph";
import LoadingIndicator from "../loader/LoadingIndicator";
import { getGradientData } from "./getGradientData";
import { getColorRange } from "./getColorRange";
import { getStateWise } from "../../apiUtils/Totals";
import { getDropDown } from "./getDropDownCountry";
import { getDropDownGraph } from "./getDropDownGraph";
import { getRates } from "./getRates";

//define constants
const INDIA_TOPO_JSON = require("../../topoJson/india.topo.json");
const MAP_PROJECTION = mapConstants.MAP_PROJECTION;

const DEFAULT_COLOR = mapConstants.DEFAULT_COLOR;

//Component
function IntensityMap(props) {
  const [criteria, setCriteria] = useState(tableHeader.CONFIRMED);
  const [stateTotals, setStateTotals] = useState([]);
  const [displayType, setDisplayType] = useState(mapConstants.DISPLAY_MAP);

  const { promiseInProgress } = usePromiseTracker(); // destructuring - returns an object with named property

  //dropdown menus for country map against country graph
  const dropDownMenu =
    displayType === mapConstants.DISPLAY_MAP
      ? getDropDown()
      : getDropDownGraph();

  //Change color based on user selected type of data
  const COLOR_RANGE = getColorRange(criteria);

  //change criteria based on dropdown select
  const onClick = (eventKey, event) => {
    setCriteria(() => eventKey);
  };

  //get state data - can be replaced by Redux fetch from store
  useEffect(() => {
    getStateWise().then((data) => setStateTotals(data));
  }, []);

  //find the total numbers for the entire country
  const totalCases = stateTotals.filter(
    (state) => state.statecode === tableHeader.NATIONALCOUNT
  );

  //all states
  const onlyStates = stateTotals.filter(
    (state) => state.statecode !== tableHeader.NATIONALCOUNT
  );

  let data = [];

  //set up data to be mapped - confirmed, active, recovered, death
  criteria !== tableHeader.RECOVERY_RATE &&
    criteria !== tableHeader.DEATH_RATE &&
    onlyStates.map((stateData) => {
      const _stateData = {};
      Object.assign(_stateData, {
        id: stateData.statecode,
        state: stateData.state,
        value: parseInt(stateData[criteria.toLowerCase()]),
        criteria,
      });
      data.push(_stateData);

      return data;
    });

  //recovery and death rates
  if (criteria.slice(-4) === tableHeader.RECOVERY_RATE.slice(-4)) {
    data = getRates(onlyStates, criteria, mapConstants.MAP_TYPE_COUNTRY);
  }

  const onGraphButtonClick = () => {
    displayType === mapConstants.DISPLAY_MAP
      ? setDisplayType(mapConstants.DISPLAY_GRAPH)
      : setDisplayType(mapConstants.DISPLAY_MAP);
  };

  return (
    <>
      <LoadingOverlay active={promiseInProgress} spinner={<LoadingIndicator />}>
        {/* for states being selected - hide country map and show state map based on state selected */}
        <div className="container-fluid mapdropdown">
          {props.selectedStateDistricts !== "" && (
            <div className="row">
              <div className="col-lg">
                <StateIntensityMap
                  selectedState={props.selectedStateDistricts}
                  stateTotals={onlyStates.filter(
                    (state) => state.statecode === props.selectedStateDistricts
                  )}
                  hoverDistrict={props.hoverDistrict}
                  onStateClick={props.onStateClick}
                />
              </div>
            </div>
          )}

          {/* show country graph */}
          {props.selectedStateDistricts === "" &&
            displayType === mapConstants.DISPLAY_GRAPH && (
              <>
                <div className="row">
                  <div className="col-md">
                    <CriteriaDropDown
                      onClick={onClick}
                      dropDownMenu={dropDownMenu}
                      selectedCriteria={criteria}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg">
                    <div className="samelinedivalign">
                      <div>
                        <h2 className="heading">
                          {mapConstants.MAP_HEADING_COUNTRY}
                        </h2>
                      </div>
                      <div className="backbuttondiv">
                        <button
                          className="btn btn-primary backbutton"
                          onClick={onGraphButtonClick}
                        >
                          {mapConstants.MAP_BUTTON}
                        </button>
                      </div>
                    </div>
                    <DailyChangeGraph
                      criteria={criteria}
                      mapType={mapConstants.MAP_TYPE_COUNTRY}
                    />
                  </div>
                </div>
              </>
            )}

          {/* show country map */}
          {props.selectedStateDistricts === "" &&
            displayType === mapConstants.DISPLAY_MAP && (
              <>
                <div className="row">
                  <div className="col-md">
                    <CriteriaDropDown
                      onClick={onClick}
                      dropDownMenu={dropDownMenu}
                      selectedCriteria={criteria}
                    />
                  </div>
                  <div className="col-md">
                    <LinearGradient data={getGradientData(data, COLOR_RANGE)} />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg">
                    <div className="samelinedivalign">
                      <div>
                        <h2 className="heading">
                          {mapConstants.MAP_HEADING_COUNTRY}
                        </h2>
                      </div>
                      <div className="backbuttondiv">
                        {criteria !== tableHeader.RECOVERY_RATE &&
                          criteria !== tableHeader.DEATH_RATE &&
                          criteria !== tableHeader.ACTIVE && (
                            <button
                              className="btn btn-primary backbutton"
                              onClick={onGraphButtonClick}
                            >
                              {mapConstants.GRAPH_BUTTON}
                            </button>
                          )}
                      </div>
                    </div>

                    <ChoroplethMap
                      TOPO_JSON={INDIA_TOPO_JSON}
                      MAP_PROJECTION={MAP_PROJECTION}
                      DEFAULT_COLOR={DEFAULT_COLOR}
                      totalCases={totalCases}
                      data={data}
                      COLOR_RANGE={COLOR_RANGE}
                      hoverState={props.hoverState}
                      type={mapConstants.MAP_TYPE_COUNTRY}
                      onStateClick={props.onStateClick}
                      isRate={
                        criteria === tableHeader.RECOVERY_RATE ||
                        criteria === tableHeader.DEATH_RATE
                          ? true
                          : false
                      }
                    />
                  </div>
                </div>
              </>
            )}
        </div>
      </LoadingOverlay>
    </>
  );
}

export default IntensityMap;
