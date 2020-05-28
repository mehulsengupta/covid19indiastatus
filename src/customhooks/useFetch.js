import { useState, useEffect } from "react";

import * as apicalls from "../apiUtils/Totals";
import fetchDataTypes from "../components/constantvalues/fetchDataTypes";

//custom hook to fetch data from API
export default function useFetch(dataType) {
  const [data, setData] = useState([]);
  //Updater function
  const updateData = (data) => setData(data);

  //using effect to set data while fetching
  useEffect(() => {
    dataType === fetchDataTypes.STATE
      ? apicalls.getStateWise().then((data) => setData(data))
      : dataType === fetchDataTypes.DISTRICT
      ? apicalls.getDistrictWise().then((data) => setData(data))
      : dataType === fetchDataTypes.ZONE
      ? apicalls.getZones().then((data) => setData(data))
      : dataType === fetchDataTypes.COUNTRY_DAILY
      ? apicalls.getCountryDailyChanges().then((data) => setData(data))
      : apicalls.getStateDailyChanges().then((data) => setData(data));
  }, [dataType]);

  return [data, updateData];
}
