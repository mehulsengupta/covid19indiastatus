import useFetch from "./useFetch";
import fetchDataTypes from "../components/constantvalues/fetchDataTypes";

export const useLoadData = () => {
  //API calls - passing data down to all child components
  const [stateTotals, setStateTotals, isStateLoading] = useFetch(
    fetchDataTypes.STATE
  );
  const [districtTotals, setDistrictTotals, isDistrictLoading] = useFetch(
    fetchDataTypes.DISTRICT
  );
  //const [zones, , setZones] = useFetch(fetchDataTypes.ZONE);
  const [
    countryDailyChange,
    setCountryDailyChange,
    isCountryDailyChangeLoading,
  ] = useFetch(fetchDataTypes.COUNTRY_DAILY);
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
