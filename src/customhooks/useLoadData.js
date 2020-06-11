import useFetch from "./useFetch";
import fetchDataTypes from "../components/constantvalues/fetchDataTypes";

/** A custom hook which acts as a loader for data to be sent out to the App.js 
    component which acts as a store to persist data between page redirects & 
    reloads unless the url is manually changed which causes a fresh call to the API. */
export const useLoadData = () => {
  //API calls - passing data down to all child components

  //get all state data
  const [stateTotals, setStateTotals, isStateLoading] = useFetch(
    fetchDataTypes.STATE
  );

  //get all district data
  const [districtTotals, setDistrictTotals, isDistrictLoading] = useFetch(
    fetchDataTypes.DISTRICT
  );

  //get zonal data
  //const [zones, , setZones] = useFetch(fetchDataTypes.ZONE);

  //get country daily change data
  const [
    countryDailyChange,
    setCountryDailyChange,
    isCountryDailyChangeLoading,
  ] = useFetch(fetchDataTypes.COUNTRY_DAILY);

  //get statewise daily change data
  const [
    stateDailyChange,
    setStateDailyChange,
    isStateDailyChangeLoading,
  ] = useFetch(fetchDataTypes.STATE_DAILY);

  return {
    stateTotals,
    setStateTotals,
    isStateLoading,
    districtTotals,
    setDistrictTotals,
    isDistrictLoading,
    countryDailyChange,
    setCountryDailyChange,
    isCountryDailyChangeLoading,
    stateDailyChange,
    setStateDailyChange,
    isStateDailyChangeLoading,
  };
};
