import React from "react";

import TotalCountCode from "../constantvalues/tableHeaders";
import TotalCasesCount from "../common/TotalCasesCount";
import useNumberRace from "../../customhooks/useNumberRace";
import tableHeader from "../constantvalues/tableHeaders";
import fetchDataTypes from "../constantvalues/fetchDataTypes";
import useFetch from "../../customhooks/useFetch";

function NationalCount(props) {
  /** States defined */

  //fetching statetotals from custom hook
  const [stateTotals] = useFetch(fetchDataTypes.STATE);

  const [deltaConfirmed, setDeltaConfirmed] = useNumberRace(
    tableHeader.CONFIRMED
  );
  const [deltaActive, setDeltaActive] = useNumberRace(tableHeader.ACTIVE);
  const [deltaRecovered, setDeltaRecovered] = useNumberRace(
    tableHeader.RECOVERED
  );
  const [deltaDeaths, setDeltaDeaths] = useNumberRace(tableHeader.DEATHS);

  /** Fetch the total count from the array of states */
  const nationalCount = stateTotals.filter(
    (state) =>
      //typeof state !== "undefined" &&
      state.statecode === TotalCountCode.NATIONALCOUNT
  );

  /**  Get the delta data - to prevent pass through of undefined value  */
  const deltaconfirmed =
    nationalCount.length !== 0 ? nationalCount[0].deltaconfirmed : false;

  const deltarecovered =
    nationalCount.length !== 0 ? nationalCount[0].deltarecovered : false;

  const deltadeaths =
    nationalCount.length !== 0 ? nationalCount[0].deltadeaths : false;

  const deltaactive = deltaconfirmed - deltarecovered - deltadeaths;

  /** Timeout function to simulate Race to final count of deltas - using custom hook*/
  setTimeout(() => {
    if (
      //checking for NaN to prevent false counting
      !isNaN(parseInt(deltaconfirmed)) &&
      !isNaN(parseInt(deltaactive)) &&
      !isNaN(parseInt(deltarecovered)) &&
      !isNaN(parseInt(deltadeaths))
    ) {
      setDeltaConfirmed(parseInt(deltaconfirmed));
      setDeltaActive(parseInt(deltaactive));
      setDeltaRecovered(parseInt(deltarecovered));
      setDeltaDeaths(parseInt(deltadeaths));
    }
  }, 100);

  //Component to show national count
  return (
    <TotalCasesCount
      toggleMode={props.toggleMode}
      darkMode={props.darkMode}
      nationalCount={nationalCount}
      deltaConfirmed={deltaConfirmed}
      deltaRecovered={deltaRecovered}
      deltaDeaths={deltaDeaths}
      deltaActive={deltaActive}
    />
  );
}

export default NationalCount;
