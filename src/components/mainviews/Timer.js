import React, { useState, useEffect } from "react";

import TableHeader from "../constantvalues/tableHeaders";
import { formatDate } from "../../utils/formatDate";

function Timer() {
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
          <div className="tickingclock">
            {TableHeader.TIME_NOW + " "}
            {dateNow}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
