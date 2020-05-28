import React from "react";

import TableHeader from "../constantvalues/tableHeaders";
import { formatNumbersWithComma } from "../../utils/formatNumbersWithComma";
import { formatDate, dateConvertToLocalTimeZone } from "../../utils/dateUtils";

//component for total counting of country
function TotalCasesCount(props) {
  //specific styling for dark mode vs light mode
  const nationalCountStyle = props.darkMode
    ? "nationalcountdark"
    : "nationalcountlight";

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg">
          <div className="samelinedivalign">
            <div className={props.darkMode ? "asondark" : "asonlight"}>
              {TableHeader.AS_ON +
                props.nationalCount.map((state) =>
                  formatDate(dateConvertToLocalTimeZone(state.lastupdatedtime))
                )}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {props.nationalCount.map((state) => (
          <React.Fragment key={state + "Fragment"}>
            <div
              className={`col ${nationalCountStyle} text-center`}
              key={state.confirmed}
            >
              <div>{TableHeader.CONFIRMED}</div>
              <div className="totalconfirmed">
                <div className="totaldeltaconfirmed">
                  {"+" + formatNumbersWithComma(props.deltaConfirmed)}
                </div>
                {formatNumbersWithComma(state.confirmed)}
              </div>
            </div>

            <div
              className={`col ${nationalCountStyle} text-center`}
              key={state.active}
            >
              <div>{TableHeader.ACTIVE}</div>
              <div className="totalactive">
                <div className="totaldeltaactive">
                  {props.deltaActive >= 0
                    ? "+" + formatNumbersWithComma(props.deltaActive)
                    : TableHeader.NA}
                </div>
                {formatNumbersWithComma(state.active)}
              </div>
            </div>
            <div
              className={`col ${nationalCountStyle} text-center`}
              key={state.recovered}
            >
              <div>{TableHeader.RECOVERED}</div>
              <div className="totalrecovered">
                <div className="totaldeltarecovered">
                  {"+" + formatNumbersWithComma(props.deltaRecovered)}
                </div>
                {formatNumbersWithComma(state.recovered)}
              </div>
            </div>
            <div
              className={`col ${nationalCountStyle} text-center`}
              key={state.deaths}
            >
              <div>{TableHeader.DEATHS}</div>
              <div className="totaldeaths">
                <div className="totaldeltadeaths">
                  {"+" + formatNumbersWithComma(props.deltaDeaths)}
                </div>
                {formatNumbersWithComma(state.deaths)}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default TotalCasesCount;
