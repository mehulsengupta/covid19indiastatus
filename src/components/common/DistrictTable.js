import React from "react";

import sortTypes from "../constantvalues/sortTypes";
import tableHeader from "../constantvalues/tableHeaders";
import { formatNumbersWithComma } from "../../utils/formatNumbersWithComma";

//To generate list of districts
function DistrictTable(props) {
  return (
    <div>
      <table className="table table-sm table-hover table-striped">
        <thead className="thead-dark">
          <tr>
            <th
              onClick={() =>
                props.onSort(
                  props.districtTotals,
                  tableHeader.DISTRICT,
                  sortTypes.DISTRICT
                )
              }
            >
              {tableHeader.DISTRICT}
              <i
                className={
                  props.sortOrder.districtColumn === tableHeader.DISTRICT
                    ? props.sortOrder.districtIcon
                    : ""
                }
              ></i>
            </th>

            <th
              onClick={() =>
                props.onSort(
                  props.districtTotals,
                  tableHeader.CONFIRMED,
                  sortTypes.DISTRICT
                )
              }
            >
              {tableHeader.CONFIRMED}
              <i
                className={
                  props.sortOrder.districtColumn === tableHeader.CONFIRMED
                    ? props.sortOrder.districtIcon
                    : ""
                }
              ></i>
            </th>
            <th
              onClick={() =>
                props.onSort(
                  props.districtTotals,
                  tableHeader.ACTIVE,
                  sortTypes.DISTRICT
                )
              }
            >
              {tableHeader.ACTIVE}
              <i
                className={
                  props.sortOrder.districtColumn === tableHeader.ACTIVE
                    ? props.sortOrder.districtIcon
                    : ""
                }
              ></i>
            </th>
            <th
              onClick={() =>
                props.onSort(
                  props.districtTotals,
                  tableHeader.RECOVERED,
                  sortTypes.DISTRICT
                )
              }
            >
              {tableHeader.RECOVERED}
              <i
                className={
                  props.sortOrder.districtColumn === tableHeader.RECOVERED
                    ? props.sortOrder.districtIcon
                    : ""
                }
              ></i>
            </th>
            <th
              onClick={() =>
                props.onSort(
                  props.districtTotals,
                  tableHeader.DECEASED,
                  sortTypes.DISTRICT
                )
              }
            >
              {tableHeader.DECEASED}
              <i
                className={
                  props.sortOrder.districtColumn === tableHeader.DECEASED
                    ? props.sortOrder.districtIcon
                    : ""
                }
              ></i>
            </th>
          </tr>
        </thead>
        <tbody className="district">
          {props.districtTotals.districtData.map((selectedDistrictTotal) => (
            <tr
              key={selectedDistrictTotal.district}
              onMouseEnter={() =>
                props.onDistrictMouseEnter(() => selectedDistrictTotal.district)
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
    </div>
  );
}

export default DistrictTable;
