import React from "react";
import SlideDown from "react-slidedown";

import "react-slidedown/lib/slidedown.css";

import tableHeader from "../constantvalues/tableHeaders";
import cssConstants from "../constantvalues/cssconstants";
import sortTypes from "../constantvalues/sortTypes";
import { formatNumbersWithComma } from "../../utils/formatNumbersWithComma";
import DistrictTable from "./DistrictTable";

//To generate list of states
function StateTable({
  stateTotals,
  onClick,
  onMouseEnter,
  onDistrictMouseEnter,
  districtTotals,
  isExpanded,
  onSort,
  sortOrder,
  darkMode,
}) {
  //styling for dark mode vs light mode
  const tableHeaderStyle = darkMode ? "dark" : "light";

  return (
    <>
      <table className="table table-striped table-hover table-responsive">
        <thead className="thead-dark">
          <tr>
            <th
              className={tableHeaderStyle}
              onClick={() =>
                onSort(stateTotals, tableHeader.STATE, sortTypes.STATE)
              }
            >
              {tableHeader.STATE + " and " + tableHeader.UT}
              <i
                className={
                  sortOrder.table === sortTypes.STATE
                    ? sortOrder.stateColumn === tableHeader.STATE
                      ? sortOrder.stateIcon
                      : ""
                    : sortOrder.stateColumn === tableHeader.STATE
                    ? sortOrder.stateIcon
                    : ""
                }
              ></i>
            </th>
            <th
              className={tableHeaderStyle}
              onClick={() =>
                onSort(stateTotals, tableHeader.CONFIRMED, sortTypes.STATE)
              }
            >
              {tableHeader.CONFIRMED}
              <i
                className={
                  sortOrder.table === sortTypes.STATE
                    ? sortOrder.stateColumn === tableHeader.CONFIRMED
                      ? sortOrder.stateIcon
                      : ""
                    : sortOrder.stateColumn === tableHeader.CONFIRMED
                    ? sortOrder.stateIcon
                    : ""
                }
              ></i>
            </th>
            <th
              className={tableHeaderStyle}
              onClick={() =>
                onSort(stateTotals, tableHeader.ACTIVE, sortTypes.STATE)
              }
            >
              {tableHeader.ACTIVE}
              <i
                className={
                  sortOrder.table === sortTypes.STATE
                    ? sortOrder.stateColumn === tableHeader.ACTIVE
                      ? sortOrder.stateIcon
                      : ""
                    : sortOrder.stateColumn === tableHeader.ACTIVE
                    ? sortOrder.stateIcon
                    : ""
                }
              ></i>
            </th>
            <th
              className={tableHeaderStyle}
              onClick={() =>
                onSort(stateTotals, tableHeader.RECOVERED, sortTypes.STATE)
              }
            >
              {tableHeader.RECOVERED}
              <i
                className={
                  sortOrder.table === sortTypes.STATE
                    ? sortOrder.stateColumn === tableHeader.RECOVERED
                      ? sortOrder.stateIcon
                      : ""
                    : sortOrder.stateColumn === tableHeader.RECOVERED
                    ? sortOrder.stateIcon
                    : ""
                }
              ></i>
            </th>
            <th
              className={tableHeaderStyle}
              onClick={() =>
                onSort(stateTotals, tableHeader.DEATHS, sortTypes.STATE)
              }
            >
              {tableHeader.DEATHS + "   "}
              <i
                className={
                  sortOrder.table === sortTypes.STATE
                    ? sortOrder.stateColumn === tableHeader.DEATHS
                      ? sortOrder.stateIcon
                      : ""
                    : sortOrder.stateColumn === tableHeader.DEATHS
                    ? sortOrder.stateIcon
                    : ""
                }
              ></i>
            </th>
          </tr>
        </thead>
        <tbody className={tableHeaderStyle}>
          {stateTotals.map((selectedStateTotal) => (
            <React.Fragment key={selectedStateTotal.statecode + "FragmentKey"}>
              <tr
                style={{
                  color:
                    selectedStateTotal.statecode === districtTotals.statecode
                      ? cssConstants.selectedStateFontColor
                      : null,
                  backgroundColor:
                    selectedStateTotal.statecode === districtTotals.statecode
                      ? cssConstants.selectedStateBgColor
                      : null,
                }}
                key={selectedStateTotal.statecode}
                onClick={() => onClick(selectedStateTotal.statecode)}
                onMouseEnter={() =>
                  onMouseEnter(() => selectedStateTotal.statecode)
                }
              >
                <td className="">
                  <i
                    className={
                      isExpanded &&
                      selectedStateTotal.statecode === districtTotals.statecode
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

              {isExpanded &&
                selectedStateTotal.statecode === districtTotals.statecode && (
                  <tr className="">
                    <td
                      colSpan="5"
                      align="center"
                      className={
                        darkMode ? "districtdivdark" : "districtdivlight"
                      }
                    >
                      {" "}
                      <SlideDown>
                        <DistrictTable
                          districtTotals={districtTotals}
                          onSort={onSort}
                          sortOrder={Object.assign(sortOrder, {
                            table: sortTypes.DISTRICT,
                          })}
                          onDistrictMouseEnter={onDistrictMouseEnter}
                          darkMode={darkMode}
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

/** Code can be modified to use a smart component Row that manages state and calculations of the state table */
