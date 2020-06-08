import React from "react";

import tableHeader from "../constantvalues/tableHeaders";
import { formatNumbersWithComma } from "../../utils/formatNumbersWithComma";
import { formatDate, dateConvertToLocalTimeZone } from "../../utils/dateUtils";

//component for total counting of country
function TotalCasesCount({ nationalCount, ...props }) {
  //specific styling for dark mode vs light mode
  const nationalCountStyle = props.darkMode
    ? "nationalcountdark"
    : "nationalcountlight";

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg">
          <div className={props.darkMode ? "asondark" : "asonlight"}>
            {tableHeader.AS_ON +
              formatDate(
                dateConvertToLocalTimeZone(nationalCount.lastupdatedtime)
              )}
          </div>
        </div>

        <div className="col-lg">
          <div className="toggleicondiv">
            <button
              className={`${
                props.darkMode ? "reloadicondark" : "reloadiconlight"
              }`}
              onClick={props.onReloadClick}
            >
              <i className="fas fa-sync-alt"></i>
            </button>
            <button
              className={`${
                props.darkMode ? "toggleicondark" : "toggleiconlight"
              }`}
              onClick={props.toggleMode}
            >
              <i className={props.darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        {
          <React.Fragment key={nationalCount + "Fragment"}>
            <div
              className={`col ${nationalCountStyle} text-center`}
              key={nationalCount.confirmed}
            >
              <div>{tableHeader.CONFIRMED}</div>
              <div className="totalconfirmed">
                <div className="totaldeltaconfirmed">
                  {props.deltaConfirmed >= 0 ? (
                    "+" + formatNumbersWithComma(props.deltaConfirmed)
                  ) : (
                    // using icon if negative numbers found as awaiting proper data instead of '--'
                    <i className="fa fa-hourglass-half"></i>
                  )}
                </div>
                {formatNumbersWithComma(nationalCount.confirmed)}
              </div>
            </div>

            <div
              className={`col ${nationalCountStyle} text-center`}
              key={nationalCount.active}
            >
              <div>{tableHeader.ACTIVE}</div>
              <div className="totalactive">
                <div className="totaldeltaactive">
                  {props.deltaActive >= 0
                    ? "+" + formatNumbersWithComma(props.deltaActive)
                    : tableHeader.NA}
                </div>
                {formatNumbersWithComma(nationalCount.active)}
              </div>
            </div>
            <div
              className={`col ${nationalCountStyle} text-center`}
              key={nationalCount.recovered}
            >
              <div>{tableHeader.RECOVERED}</div>
              <div className="totalrecovered">
                <div className="totaldeltarecovered">
                  {props.deltaRecovered >= 0 ? (
                    "+" + formatNumbersWithComma(props.deltaRecovered)
                  ) : (
                    <i className="fa fa-hourglass-half"></i>
                  )}
                </div>
                {formatNumbersWithComma(nationalCount.recovered)}
              </div>
            </div>
            <div
              className={`col ${nationalCountStyle} text-center`}
              key={nationalCount.deaths}
            >
              <div>{tableHeader.DEATHS}</div>
              <div className="totaldeaths">
                <div className="totaldeltadeaths">
                  {props.deltaDeaths >= 0 ? (
                    "+" + formatNumbersWithComma(props.deltaDeaths)
                  ) : (
                    <i className="fa fa-hourglass-half"></i>
                  )}
                </div>
                {formatNumbersWithComma(nationalCount.deaths)}
              </div>
            </div>
          </React.Fragment>
        }
      </div>
    </div>
  );
}

export default TotalCasesCount;
