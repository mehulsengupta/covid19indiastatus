import { useState, useEffect } from "react";

import * as apicalls from "../apiUtils/Totals";
import fetchDataTypes from "../components/constantvalues/fetchDataTypes";
import tableHeader from "../components/constantvalues/tableHeaders";

//custom hook to fetch data from API
export default function useFetch(dataType, initialLoad) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Updater function - only used during sorting
  const updateData = (data) =>
    setData(data) && !isLoading && setIsLoading(true);

  //using effect to set data while fetching - timer can be used to show loading effect default is 0
  //fetches data only when initial load is true i.e page opened first time or reload on page clicked
  useEffect(() => {
    const timer = setTimeout(() => {
      if (initialLoad) {
        dataType === fetchDataTypes.STATE
          ? apicalls.getStateWise().then((data) => setData(data))
          : dataType === fetchDataTypes.DISTRICT
          ? apicalls.getDistrictWise().then((data) => setData(data))
          : dataType === fetchDataTypes.ZONE
          ? apicalls.getZones().then((data) => setData(data))
          : dataType === fetchDataTypes.COUNTRY_DAILY
          ? apicalls.getCountryDailyChanges().then((data) => setData(data))
          : apicalls.getStateDailyChanges().then((data) => setData(data));
      }
    }, tableHeader.COMPONENT_LOAD_TIME);
    return () => clearTimeout(timer);
  }, [dataType, initialLoad]);

  //set loading based on value fetched
  useEffect(() => {
    data !== null
      ? data.length === 0
        ? setIsLoading(true)
        : setIsLoading(false)
      : setIsLoading(false);
  }, [data]);

  return [data, updateData, isLoading];
}
