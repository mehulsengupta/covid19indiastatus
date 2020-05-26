import React from "react";
import { SlideDown } from "react-slidedown";

import "react-slidedown/lib/slidedown.css";

import tableHeader from "../constantvalues/tableHeaders";
import cssConstants from "../constantvalues/cssconstants";
import sortTypes from "../constantvalues/sortTypes";
import { formatNumbersWithComma } from "../../utils/formatNumbersWithComma";
import DistrictTable from "./DistrictTable";

//To generate list of states
function StateTable(props) {
  //styling for dark mode vs light mode
  const tableHeaderStyle = props.darkMode ? "dark" : "light";

  return (
    <>
      <table className="table table-striped table-hover table-responsive">
        <thead className="thead-dark">
          <tr>
            <th
              className={tableHeaderStyle}
              onClick={() =>
                props.onSort(
                  props.stateTotals,
                  tableHeader.STATE,
                  sortTypes.STATE
                )
              }
            >
              {tableHeader.STATE + " and " + tableHeader.UT}
              <i
                className={
                  props.sortOrder.table === sortTypes.STATE
                    ? props.sortOrder.stateColumn === tableHeader.STATE
                      ? props.sortOrder.stateIcon
                      : ""
                    : props.sortOrder.stateColumn === tableHeader.STATE
                    ? props.sortOrder.stateIcon
                    : ""
                }
              ></i>
            </th>
            <th
              className={tableHeaderStyle}
              onClick={() =>
                props.onSort(
                  props.stateTotals,
                  tableHeader.CONFIRMED,
                  sortTypes.STATE
                )
              }
            >
              {tableHeader.CONFIRMED}
              <i
                className={
                  props.sortOrder.table === sortTypes.STATE
                    ? props.sortOrder.stateColumn === tableHeader.CONFIRMED
                      ? props.sortOrder.stateIcon
                      : ""
                    : props.sortOrder.stateColumn === tableHeader.CONFIRMED
                    ? props.sortOrder.stateIcon
                    : ""
                }
              ></i>
            </th>
            <th
              className={tableHeaderStyle}
              onClick={() =>
                props.onSort(
                  props.stateTotals,
                  tableHeader.ACTIVE,
                  sortTypes.STATE
                )
              }
            >
              {tableHeader.ACTIVE}
              <i
                className={
                  props.sortOrder.table === sortTypes.STATE
                    ? props.sortOrder.stateColumn === tableHeader.ACTIVE
                      ? props.sortOrder.stateIcon
                      : ""
                    : props.sortOrder.stateColumn === tableHeader.ACTIVE
                    ? props.sortOrder.stateIcon
                    : ""
                }
              ></i>
            </th>
            <th
              className={tableHeaderStyle}
              onClick={() =>
                props.onSort(
                  props.stateTotals,
                  tableHeader.RECOVERED,
                  sortTypes.STATE
                )
              }
            >
              {tableHeader.RECOVERED}
              <i
                className={
                  props.sortOrder.table === sortTypes.STATE
                    ? props.sortOrder.stateColumn === tableHeader.RECOVERED
                      ? props.sortOrder.stateIcon
                      : ""
                    : props.sortOrder.stateColumn === tableHeader.RECOVERED
                    ? props.sortOrder.stateIcon
                    : ""
                }
              ></i>
            </th>
            <th
              className={tableHeaderStyle}
              onClick={() =>
                props.onSort(
                  props.stateTotals,
                  tableHeader.DEATHS,
                  sortTypes.STATE
                )
              }
            >
              {tableHeader.DEATHS + "   "}
              <i
                className={
                  props.sortOrder.table === sortTypes.STATE
                    ? props.sortOrder.stateColumn === tableHeader.DEATHS
                      ? props.sortOrder.stateIcon
                      : ""
                    : props.sortOrder.stateColumn === tableHeader.DEATHS
                    ? props.sortOrder.stateIcon
                    : ""
                }
              ></i>
            </th>
          </tr>
        </thead>
        <tbody className={tableHeaderStyle}>
          {props.stateTotals.map((selectedStateTotal) => (
            <React.Fragment key={selectedStateTotal.statecode + "FragmentKey"}>
              <tr
                style={{
                  color:
                    selectedStateTotal.statecode ===
                    props.districtTotals.statecode
                      ? cssConstants.selectedStateFontColor
                      : null,
                  backgroundColor:
                    selectedStateTotal.statecode ===
                    props.districtTotals.statecode
                      ? cssConstants.selectedStateBgColor
                      : null,
                }}
                key={selectedStateTotal.statecode}
                onClick={() => props.onClick(selectedStateTotal.statecode)}
                onMouseEnter={() =>
                  props.onMouseEnter(() => selectedStateTotal.statecode)
                }
              >
                <td className="">
                  <i
                    className={
                      props.isExpanded &&
                      selectedStateTotal.statecode ===
                        props.districtTotals.statecode
                        ? sortTypes.EXPANDEDICON
                        : sortTypes.COLLAPSEDICON
                    }
                  ></i>
                  {"    " + selectedStateTotal.state}
                </td>
                <td>
                  <div className="samelinedivalign">
                    <div className="deltaconfirmed">
                      {selectedStateTotal.deltaconfirmed > 0
                        ? "+" +
                          formatNumbersWithComma(
                            selectedStateTotal.deltaconfirmed
                          )
                        : ""}
                    </div>
                    <div className="nondelta">
                      {formatNumbersWithComma(selectedStateTotal.confirmed)}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="samelinedivalign">
                    <div className="deltaactive">
                      {selectedStateTotal.deltaconfirmed -
                        selectedStateTotal.deltarecovered -
                        selectedStateTotal.deltadeaths >
                      0
                        ? "+" +
                          formatNumbersWithComma(
                            selectedStateTotal.deltaconfirmed -
                              selectedStateTotal.deltarecovered -
                              selectedStateTotal.deltadeaths
                          )
                        : ""}
                    </div>
                    <div className="nondelta">
                      {selectedStateTotal.confirmed -
                        selectedStateTotal.recovered -
                        selectedStateTotal.deaths <
                      0
                        ? 0
                        : formatNumbersWithComma(
                            selectedStateTotal.confirmed -
                              selectedStateTotal.recovered -
                              selectedStateTotal.deaths
                          )}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="samelinedivalign">
                    <div className="deltarecovered">
                      {selectedStateTotal.deltarecovered > 0
                        ? "+" +
                          formatNumbersWithComma(
                            selectedStateTotal.deltarecovered
                          )
                        : ""}
                    </div>
                    <div className="nondelta">
                      {formatNumbersWithComma(selectedStateTotal.recovered)}
                    </div>
                  </div>
                </td>

                <td>
                  <div className="samelinedivalign">
                    <div className="deltadeaths">
                      {selectedStateTotal.deltadeaths > 0
                        ? "+" +
                          formatNumbersWithComma(selectedStateTotal.deltadeaths)
                        : ""}
                    </div>
                    <div className="nondelta">
                      {formatNumbersWithComma(selectedStateTotal.deaths)}
                    </div>
                  </div>
                </td>
              </tr>

              {props.isExpanded &&
                selectedStateTotal.statecode ===
                  props.districtTotals.statecode && (
                  <tr className="">
                    <td
                      colSpan="5"
                      align="center"
                      className={
                        props.darkMode ? "districtdivdark" : "districtdivlight"
                      }
                    >
                      {" "}
                      <SlideDown className="districtsslidedown">
                        <DistrictTable
                          districtTotals={props.districtTotals}
                          onSort={props.onSort}
                          sortOrder={Object.assign(props.sortOrder, {
                            table: sortTypes.DISTRICT,
                          })}
                          onDistrictMouseEnter={props.onDistrictMouseEnter}
                          darkMode={props.darkMode}
                        />
                      </SlideDown>
                    </td>
                  </tr>
                )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default StateTable;
