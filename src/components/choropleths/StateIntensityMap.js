import React, { useState, useEffect } from "react";

import tableHeader from "../constantvalues/tableHeaders";
import { getDistrictWise, getZones } from "../../apiUtils/Totals";
import mapConstants from "../constantvalues/mapConstants";
import ChoroplethMap from "../common/ChoroplethMap";
import { getColorRange } from "./getColorRange";
import { getDropDown } from "./getDropDownState";
import { getDropDownGraph } from "./getDropDownStateGraph";
import { getGradientData } from "./getGradientData";
import { getRates } from "./getRates";
import { formatNumbersWithComma } from "../../utils/formatNumbersWithComma";
import CriteriaDropDown from "../common/CriteriaDropDowns";
import LinearGradient from "./LinearGradient";
import mapDistrictZones from "../../utils/mapDistrictZones";
import DailyChangeGraph from "../graphs/DailyChangeGraph";

//functional component to show state maps
function StateIntensityMap(props) {
  //get appropriate topo json file
  let STATE_TOPO_JSON = "";
  let stateUnassigned = false;

  //error handling if topo json fails to load
  try {
    STATE_TOPO_JSON = require("../../topoJson/states/" +
      props.selectedState +
      ".json");
  } catch (error) {
    stateUnassigned = true;
  }

  //get projection values specific
  const projection = mapConstants.MAP_PROJECTION_STATE.specifics.filter(
    (specific) => specific.statecode === props.selectedState
  );
  const MAP_PROJECTION = !stateUnassigned
    ? {
        scale: projection[0].scale, //to increase/decrease map size
        center: projection[0].center,
      }
    : "";
  const DEFAULT_COLOR = mapConstants.DEFAULT_COLOR;

  //styling specific for dark mode vs light mode
  const stateCountStyle = props.darkMode ? "statecountdark" : "statecountlight";

  //hooks
  const [criteria, setCriteria] = useState(tableHeader.CONFIRMED);
  const [districtTotals, setDistrictTotals] = useState([]);
  const [zones, setZones] = useState([]);
  const [displayType, setDisplayType] = useState(mapConstants.DISPLAY_MAP);
  let data = [];

  //dropdown
  const dropDownMenu =
    displayType === mapConstants.DISPLAY_MAP
      ? getDropDown()
      : getDropDownGraph();

  //get color range based on criteria
  const COLOR_RANGE = getColorRange(criteria);

  //event handler for click menu
  const onClick = (eventKey, event) => {
    setCriteria(() => eventKey);
  };

  const onGraphButtonClick = () => {
    displayType === mapConstants.DISPLAY_MAP
      ? setDisplayType(mapConstants.DISPLAY_GRAPH)
      : setDisplayType(mapConstants.DISPLAY_MAP);
  };

  //fetch district data for a selected state
  useEffect(() => {
    getDistrictWise().then((data) => setDistrictTotals(data));
  }, []);

  //fetch zones
  useEffect(() => {
    getZones().then((data) => setZones(data));
  }, []);

  //districts selected for a state
  const selectedDistricts = districtTotals.filter(
    (state) => state.statecode === props.selectedState
  );

  //setting districts to be mapped for a state (confirmed, active, recovered, death)
  criteria !== tableHeader.RECOVERY_RATE &&
    criteria !== tableHeader.DEATH_RATE &&
    criteria !== tableHeader.ZONES &&
    selectedDistricts.map((_districtsList) =>
      _districtsList.districtData.map((_district) => {
        const _districtData = {};
        Object.assign(_districtData, {
          id: _district.district,
          state: _district.district,
          value: parseInt(
            _district[criteria.toLowerCase()] < 0
              ? 0
              : _district[criteria.toLowerCase()]
          ),
          criteria:
            criteria === dropDownMenu[3] ? tableHeader.DEATHS : criteria,
        });
        data.push(_districtData);

        return data;
      })
    );

  //recovery and death rates
  if (
    criteria === tableHeader.RECOVERY_RATE ||
    criteria === tableHeader.DEATH_RATE
  ) {
    data = getRates(selectedDistricts, criteria, mapConstants.MAP_TYPE_STATE);
  }

  //zones
  if (criteria === tableHeader.ZONES) {
    mapDistrictZones(selectedDistricts, zones.zones);
    selectedDistricts.map((_districtsList) =>
      _districtsList.districtData.map((_district) => {
        const _districtData = {};
        Object.assign(_districtData, {
          id: _district.district,
          state: _district.district,
          value: _district.color,
          criteria,
        });
        data.push(_districtData);
        return data;
      })
    );
  }

  //state name of state selected
  const stateName = selectedDistricts.map((district) => district.state);

  return (
    <>
      {props.stateTotals.map((district) => (
        <div className="row" key={district.statecode}>
          <div className={`col ${stateCountStyle} text-center`}>
            <div>{tableHeader.CONFIRMED}</div>
            <div className="statetotalconfirmed">
              {formatNumbersWithComma(district.confirmed)}
            </div>
          </div>
          <div className={`col ${stateCountStyle} text-center`}>
            <div>{tableHeader.RECOVERED}</div>
            <div className="statetotalrecovered">
              {formatNumbersWithComma(district.recovered)}
            </div>
          </div>
          <div className={`col ${stateCountStyle} text-center`}>
            <div>{tableHeader.DECEASED}</div>
            <div className="statetotaldeaths">
              {formatNumbersWithComma(district.deaths)}
            </div>
          </div>
        </div>
      ))}
      {!stateUnassigned ? (
        <>
          <div className="row">
            <div className="col-md">
              <CriteriaDropDown
                onClick={onClick}
                dropDownMenu={dropDownMenu}
                selectedCriteria={criteria}
              />
            </div>
            {displayType === mapConstants.DISPLAY_MAP && (
              <div className="col-md">
                <LinearGradient
                  data={getGradientData(data, COLOR_RANGE)}
                  criteria={criteria}
                  darkMode={props.darkMode}
                />
              </div>
            )}
          </div>
          <div>
            <div className="col-md">
              <div className="samelinedivalign">
                <div>
                  <h4
                    className={props.darkMode ? "headingdark" : "headinglight"}
                  >
                    {stateName}
                  </h4>
                </div>
                <div className="backbuttondiv">
                  <button
                    className="btn btn-primary backbutton"
                    onClick={() => props.onStateClick("")}
                  >
                    {mapConstants.BACK_BUTTON}
                  </button>
                </div>
                <div className="backbuttondiv">
                  {displayType === mapConstants.DISPLAY_MAP &&
                    criteria !== tableHeader.RECOVERY_RATE &&
                    criteria !== tableHeader.DEATH_RATE &&
                    criteria !== tableHeader.ACTIVE &&
                    criteria !== tableHeader.ZONES && (
                      <button
                        className="btn btn-primary backbutton"
                        onClick={onGraphButtonClick}
                      >
                        {mapConstants.GRAPH_BUTTON}
                      </button>
                    )}
                  {displayType === mapConstants.DISPLAY_GRAPH && (
                    <button
                      className="btn btn-primary backbutton"
                      onClick={onGraphButtonClick}
                    >
                      {mapConstants.MAP_BUTTON}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {displayType === mapConstants.DISPLAY_MAP ? (
            <ChoroplethMap
              TOPO_JSON={STATE_TOPO_JSON}
              MAP_PROJECTION={MAP_PROJECTION}
              DEFAULT_COLOR={DEFAULT_COLOR}
              totalCases={props.stateTotals}
              data={data}
              COLOR_RANGE={COLOR_RANGE}
              hoverDistrict={props.hoverDistrict}
              onStateClick={props.onStateClick}
              type={mapConstants.MAP_TYPE_STATE}
              isRate={
                criteria === tableHeader.RECOVERY_RATE ||
                criteria === tableHeader.DEATH_RATE
                  ? true
                  : false
              }
              isZonal={criteria === tableHeader.ZONES ? true : false}
            />
          ) : (
            <DailyChangeGraph
              criteria={criteria}
              mapType={mapConstants.MAP_TYPE_STATE}
              statecode={props.selectedState}
              darkMode={props.darkMode}
            />
          )}
        </>
      ) : (
        <div className="backbuttondiv">
          <button
            className="btn btn-primary backbutton"
            onClick={() => props.onStateClick("")}
          >
            {mapConstants.BACK_BUTTON}
          </button>
        </div>
      )}
    </>
  );
}

export default StateIntensityMap;
