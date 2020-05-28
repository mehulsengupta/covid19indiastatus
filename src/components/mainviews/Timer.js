import React, { useState, useEffect } from "react";

import tableHeader from "../constantvalues/tableHeaders";
import { formatDate } from "../../utils/dateUtils";

function Timer(props) {
  const [dateNow, setDateNow] = useState(formatDate(new Date()));

  //for running clock
  useEffect(() => {
    const timer = setInterval(() => setDateNow(formatDate(new Date())), 1000);
    return () => clearInterval(timer);
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg">
          <div
            className={`${
              props.darkMode ? "tickingclockdark" : "tickingclocklight"
            }`}
          >
            {tableHeader.TIME_NOW + " "}
            {dateNow}
          </div>
        </div>
        <div>
          <div className="toggleicondiv col-lg">
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
    </div>
  );
}

export default Timer;
