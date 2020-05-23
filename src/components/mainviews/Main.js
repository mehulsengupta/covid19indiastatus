import React, { useEffect, useState } from "react";

import { getStateWise, getDistrictWise, getZones } from "../../apiUtils/Totals";
import Table from "../common/StateTable";

import IntensityMap from "../choropleths/IntensityMap";

import { sortColumns } from "../../utils/sortColumns";
import mapDistrictZones from "../../utils/mapDistrictZones";

import sortTypes from "../constantvalues/sortTypes";
import tableHeaders from "../constantvalues/tableHeaders";
import SlideDown from "react-slidedown";
import mapConstants from "../constantvalues/mapConstants";

function TableMain() {
  /** Hooks definition start */
  const [stateTotals, setStateTotals] = useState([]); //hook to store state array

  const [districtTotals, setDistrictTotals] = useState([]); //hook to store district object with nested statecode
  //and data

  const [zones, setZones] = useState([]); //hook to store zones nation wide

  const [sortOrder, setSortOrder] = useState({
    flag: sortTypes.INITIAL,
    table: sortTypes.STATE,
    stateColumn: tableHeaders.CONFIRMED,
    districtColumn: tableHeaders.CONFIRMED,
    stateIcon: sortTypes.DESCENDINGICON,
    districtIcon: sortTypes.DESCENDINGICON,
    order: sortTypes.ASCENDING,
  }); /**ordering hook to deal with type of table to be sorted, the state and district columns separately
         and also the bs-fa icons to be used individually in both the tables. Default sort - descending with confirmed
  */

  const [isExpanded, setIsExpanded] = useState({
    stateCode: "",
    expanded: false,
  }); //to control expansion of states into district view

  const [selectedStateDistricts, setSelectedStateDistricts] = useState(
    { statecode: "", districtData: "" } //hook to hold districts of a particular state with state code
  );

  const [mapState, setMapState] = useState(""); //hook to store the statecode of state clicked on map

  const [hoverState, setHoverState] = useState([]); //hook to store the state hovered on map

  const [hoverDistrict, setHoverDistrict] = useState([]); // district hovered on map

  /** Hooks definition end */

  //use-effect to fetch and store data asynchronously from API
  useEffect(() => {
    getStateWise().then((data) => setStateTotals(data));
  }, []);

  useEffect(() => {
    getDistrictWise().then((data) => setDistrictTotals(data));
  }, []);

  useEffect(() => {
    getZones().then((data) => setZones(data));
  }, []);
  // end use-effect

  //first time display sort to confirmed descending
  if (sortOrder.flag)
    sortColumns(stateTotals, sortTypes.DESCENDING, tableHeaders.CONFIRMED);

  const getDistrictArray = (statecode) => {
    //get districts list for particular state out of the list of all districts of all states
    let stateSelected = districtTotals.filter(
      (_state) => _state.statecode === statecode
    );

    //get zones for a state
    mapDistrictZones(stateSelected, zones.zones);

    sortColumns(
      stateSelected[0].districtData,
      sortTypes.DESCENDING,
      tableHeaders.CONFIRMED
    ); //sort district arrays to show default order of highest confirmed cases descending

    Object.assign(sortOrder, {
      districtColumn: tableHeaders.CONFIRMED,
      districtIcon: sortTypes.DESCENDINGICON,
    }); //default column to be shown when district table viewed - confirmed and descending along with fa icon

    resetArray(isExpanded.stateCode); //reset existing district array

    //set final array to be passed as props and also expanded hook to record changes
    setIsExpanded({
      stateCode: statecode,
      expanded: true,
    });

    setSelectedStateDistricts({
      statecode: stateSelected[0].statecode,
      districtData: stateSelected[0].districtData,
    });
  };

  function resetArray(statecode) {
    //reset array for state change or collapsing already expanded state
    setIsExpanded({
      stateCode: statecode,
      expanded: false,
    });
    setSelectedStateDistricts({ statecode: "", districtData: "" });
  }

  //*****************ROW CLICK HANDLER - STATE EXPANSION*/
  function onRowClick(statecode) {
    setMapState("");
    //show all districts for a particular state
    (!isExpanded.expanded && isExpanded.stateCode !== statecode) ||
    (isExpanded.expanded && isExpanded.stateCode !== statecode)
      ? getDistrictArray(statecode) //expanded first time or some other state expanded
      : resetArray(""); //collapse already expanded state by clicking on it
  }

  function onMapStateClick(statecode) {
    if (statecode === "") {
      setMapState("");
      resetArray(statecode); //clear district array
      setSelectedStateDistricts({ statecode: "", districtData: "" });
    } else if (statecode === mapConstants.MAP_CLICK_NO_EFFECT)
      statecode = mapConstants.MAP_CLICK_NO_EFFECT;
    else {
      setMapState(statecode);
    }
  }

  //Row hover handler (country)
  const onRowMouseEnter = (statecode) => {
    setHoverState(statecode);
  };

  //Row hover handler (state)
  const onDistrictMouseEnter = (districtname) => {
    setHoverDistrict(districtname);
  };

  //master function to sort using generic sort function - HEADER CLICK HANDLER
  //Note : Hooks update are visible on next update. Function optimized accordingly.
  /** Sequence of sorting reversed. Initial ascending, hence sorted ascending visible when header clicked again
   * (re-rendered) to reflect from descending to ascending.
   */
  const sortData = (totalsList, type, tableType) => {
    if (sortOrder.flag)
      setSortOrder(Object.assign(sortOrder, { flag: !sortTypes.INITIAL }));
    if (tableType === sortTypes.STATE) {
      //sort as per prev sorting value - state table
      if (sortOrder.order === sortTypes.ASCENDING) {
        sortColumns(totalsList, sortTypes.ASCENDING, type);
        setSortOrder(
          Object.assign(sortOrder, {
            table: tableType,
            stateColumn: type,
            stateIcon: sortTypes.ASCENDINGICON,
            order: sortTypes.DESCENDING,
          })
        );
      } else {
        sortColumns(totalsList, sortTypes.DESCENDING, type);
        setSortOrder(
          Object.assign(sortOrder, {
            table: tableType,
            stateColumn: type,
            stateIcon: sortTypes.DESCENDINGICON,
            order: sortTypes.ASCENDING,
          })
        );
      }
      setStateTotals(totalsList);
    } else {
      //district - table
      if (sortOrder.order === sortTypes.ASCENDING) {
        sortColumns(totalsList.districtData, sortTypes.ASCENDING, type);
        setSortOrder(
          Object.assign(sortOrder, {
            table: tableType,
            districtColumn: type,
            districtIcon: sortTypes.ASCENDINGICON,
            order: sortTypes.DESCENDING,
          })
        );
      } else {
        sortColumns(totalsList.districtData, sortTypes.DESCENDING, type);
        setSortOrder(
          Object.assign(sortOrder, {
            table: tableType,
            districtColumn: type,
            districtIcon: sortTypes.DESCENDINGICON,
            order: sortTypes.ASCENDING,
          })
        );
      }

      setSelectedStateDistricts({
        statecode: totalsList.statecode,
        districtData: totalsList.districtData,
      });
    }
  };

  return (
    <SlideDown>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg">
            {
              <Table
                stateTotals={stateTotals.filter(
                  (state) =>
                    state.statecode !== tableHeaders.NATIONALCOUNT &&
                    parseInt(state.confirmed) !== 0
                )}
                onClick={onRowClick}
                onMouseEnter={onRowMouseEnter}
                onDistrictMouseEnter={onDistrictMouseEnter}
                districtTotals={selectedStateDistricts}
                isExpanded={isExpanded.expanded}
                onSort={sortData}
                sortOrder={sortOrder}
              />
            }
          </div>
          <div className="col-lg">
            <div className="sticky-top">
              {" "}
              <IntensityMap
                hoverState={hoverState}
                selectedStateDistricts={
                  mapState !== "" ? mapState : selectedStateDistricts.statecode
                }
                hoverDistrict={hoverDistrict}
                onStateClick={onMapStateClick}
              />
            </div>
          </div>
        </div>
      </div>
    </SlideDown>
  );
}

export default TableMain;
