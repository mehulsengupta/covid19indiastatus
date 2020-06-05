import React from "react";

import sortTypes from "../constantvalues/sortTypes";
import tableHeader from "../constantvalues/tableHeaders";
import { formatNumbersWithComma } from "../../utils/formatNumbersWithComma";

//To generate list of districts
function DistrictTable({
  districtTotals,
  onSort,
  sortOrder,
  onDistrictMouseEnter,
  darkMode,
}) {
  //styling for dark vs light mode
  const tableHeaderStyle = darkMode ? "dark" : "light";

  return (
    <table className="table table-sm table-hover table-striped">
      <thead className="thead-dark">
        <tr>
          <th
            className={tableHeaderStyle}
            onClick={() =>
              onSort(districtTotals, tableHeader.DISTRICT, sortTypes.DISTRICT)
            }
          >
            {tableHeader.DISTRICT}
            <i
              className={
                sortOrder.districtColumn === tableHeader.DISTRICT
                  ? sortOrder.districtIcon
                  : ""
              }
            ></i>
          </th>

          <th
            className={tableHeaderStyle}
            onClick={() =>
              onSort(districtTotals, tableHeader.CONFIRMED, sortTypes.DISTRICT)
            }
          >
            {tableHeader.CONFIRMED}
            <i
              className={
                sortOrder.districtColumn === tableHeader.CONFIRMED
                  ? sortOrder.districtIcon
                  : ""
              }
            ></i>
          </th>
          <th
            className={tableHeaderStyle}
            onClick={() =>
              onSort(districtTotals, tableHeader.ACTIVE, sortTypes.DISTRICT)
            }
          >
            {tableHeader.ACTIVE}
            <i
              className={
                sortOrder.districtColumn === tableHeader.ACTIVE
                  ? sortOrder.districtIcon
                  : ""
              }
            ></i>
          </th>
          <th
            className={tableHeaderStyle}
            onClick={() =>
              onSort(districtTotals, tableHeader.RECOVERED, sortTypes.DISTRICT)
            }
          >
            {tableHeader.RECOVERED}
            <i
              className={
                sortOrder.districtColumn === tableHeader.RECOVERED
                  ? sortOrder.districtIcon
                  : ""
              }
            ></i>
          </th>
          <th
            className={tableHeaderStyle}
            onClick={() =>
              onSort(districtTotals, tableHeader.DECEASED, sortTypes.DISTRICT)
            }
          >
            {tableHeader.DECEASED}
            <i
              className={
                sortOrder.districtColumn === tableHeader.DECEASED
                  ? sortOrder.districtIcon
                  : ""
              }
            ></i>
          </th>
        </tr>
      </thead>
      <tbody className={darkMode ? "districtdark" : "districtlight"}>
        {districtTotals.districtData.map((selectedDistrictTotal) => (
          <tr
            key={selectedDistrictTotal.district}
            onMouseEnter={() =>
              onDistrictMouseEnter(() => selectedDistrictTotal.district)
            }
          >
            <td className={selectedDistrictTotal.color}>
              {selectedDistrictTotal.district}
            </td>
            <td>
              <div className="samelinedivalign">
                <div className="deltaconfirmeddistrict">
                  {selectedDistrictTotal.delta.confirmed > 0
                    ? "+" +
                      formatNumbersWithComma(
                        selectedDistrictTotal.delta.confirmed
                      )
                    : ""}
                </div>
                <div className="nondeltadistrict">
                  {formatNumbersWithComma(selectedDistrictTotal.confirmed)}
                </div>
              </div>
            </td>
            <td>
              <div className="samelinedivalign">
                <div className="deltaactivedistrict">
                  {selectedDistrictTotal.delta.confirmed -
                    selectedDistrictTotal.delta.recovered -
                    selectedDistrictTotal.delta.deceased >
                  0
                    ? "+" +
                      formatNumbersWithComma(
                        selectedDistrictTotal.delta.confirmed -
                          selectedDistrictTotal.delta.recovered -
                          selectedDistrictTotal.delta.deceased
                      )
                    : ""}
                </div>
                <div className="nondeltadistrict">
                  {selectedDistrictTotal.confirmed -
                    selectedDistrictTotal.recovered -
                    selectedDistrictTotal.deceased <
                  0
                    ? 0
                    : formatNumbersWithComma(
                        selectedDistrictTotal.confirmed -
                          selectedDistrictTotal.recovered -
                          selectedDistrictTotal.deceased
                      )}
                </div>
              </div>
            </td>
            <td>
              <div className="samelinedivalign">
                {" "}
                <div className="deltarecovereddistrict">
                  {selectedDistrictTotal.delta.recovered > 0
                    ? "+" +
                      formatNumbersWithComma(
                        selectedDistrictTotal.delta.recovered
                      )
                    : ""}
                </div>
                <div className="nondeltadistrict">
                  {formatNumbersWithComma(selectedDistrictTotal.recovered)}
                </div>
              </div>
            </td>
            <td>
              <div className="samelinedivalign">
                <div className="deltadeceaseddistrict">
                  {selectedDistrictTotal.delta.deceased > 0
                    ? "+" +
                      formatNumbersWithComma(
                        selectedDistrictTotal.delta.deceased
                      )
                    : ""}
                </div>
                <div className="nondeltadistrict">
                  {formatNumbersWithComma(selectedDistrictTotal.deceased)}
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DistrictTable;
