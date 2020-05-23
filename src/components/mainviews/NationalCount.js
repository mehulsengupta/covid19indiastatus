import React, { useState, useEffect } from "react";

import { getStateWise } from "../../apiUtils/Totals";
import TotalCountCode from "../constantvalues/tableHeaders";
import TotalCasesCount from "../common/TotalCasesCount";

function NationalCount() {
  /** States defined */

  const [stateTotals, setStateTotals] = useState([]);
  const [deltaConfirmed, setDeltaConfirmed] = useState(0);
  const [deltaActive, setDeltaActive] = useState(0);
  const [deltaRecovered, setDeltaRecovered] = useState(0);
  const [deltaDeaths, setDeltaDeaths] = useState(0);

  /** Fetch data from the API - to be linked to Redux store later on */
  useEffect(() => {
    getStateWise().then((data) => setStateTotals(data));
  }, []);

  /** Fetch the total count from the array of states */
  const nationalCount = stateTotals.filter(
    (state) =>
      //typeof state !== "undefined" &&
      state.statecode === TotalCountCode.NATIONALCOUNT
  );

  /**  Get the delta data - to check for undefined (first time) or 
       empty array since setState updates are visible on next render   */
  const deltaconfirmed =
    nationalCount.length !== 0 ? nationalCount[0].deltaconfirmed : false;

  const deltarecovered =
    nationalCount.length !== 0 ? nationalCount[0].deltarecovered : false;

  const deltadeaths =
    nationalCount.length !== 0 ? nationalCount[0].deltadeaths : false;

  // nationalCount.filter((state) => state.deltaconfirmed);

  //  = nationalCount.map((state) => state.deltaconfirmed);

  //  = nationalCount.map((state) => state.deltarecovered);
  // const deltadeaths = nationalCount.map((state) => state.deltadeaths);

  const deltaactive = deltaconfirmed - deltarecovered - deltadeaths;

  /** Timeout function to simulate Race to final count of deltas */
  useEffect(() => {
    const timer = setTimeout(() => {
      if (deltaConfirmed < deltaconfirmed) {
        setDeltaConfirmed(() => {
          if (deltaconfirmed - deltaConfirmed >= 100) {
            return deltaConfirmed + 100;
          }
          return deltaConfirmed + 1;
        });
      }
      if (deltaActive < deltaactive)
        setDeltaActive(() => {
          if (deltaactive - deltaActive >= 100) {
            return deltaActive + 75;
          }
          return deltaActive + 1;
        });
      if (deltaRecovered < deltarecovered)
        setDeltaRecovered(() => {
          if (deltarecovered - deltaRecovered >= 100) {
            return deltaRecovered + 75;
          }
          return deltaRecovered + 1;
        });
      if (deltaDeaths < deltadeaths)
        setDeltaDeaths(() => {
          if (deltadeaths - deltaDeaths >= 100) {
            return deltaDeaths + 10;
          }
          return deltaDeaths + 1;
        });
    }, 10);
    return () => clearTimeout(timer);
  });

  //Component
  return (
    <TotalCasesCount
      nationalCount={nationalCount}
      deltaConfirmed={deltaConfirmed}
      deltaRecovered={deltaRecovered}
      deltaDeaths={deltaDeaths}
      deltaActive={deltaActive}
    />
  );
}

export default NationalCount;
