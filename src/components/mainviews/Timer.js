import React, { useState, useEffect } from "react";

import TableHeader from "../constantvalues/tableHeaders";
import { formatDate } from "../../utils/formatDate";

function Timer(props) {
  const [dateNow, setDateNow] = useState(formatDate());

  //for running clock
  useEffect(() => {
    const timer = setInterval(() => setDateNow(formatDate()), 1000);
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
            {TableHeader.TIME_NOW + " "}
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
              <i className={props.darkMode ? "far fa-sun" : "far fa-moon"}></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
