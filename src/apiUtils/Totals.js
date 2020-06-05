import url from "../components/constantvalues/endpoints";
import { getDataFromApi } from "./getDataFromApi";

//function to get data from specific APIs. Polling can be added for periodic checks using Redux

//statewise data
export async function getStateWise() {
  return getDataFromApi(url.STATEWISE_URL).then((data) => data.statewise);
}

//district wise data for a particular state
export async function getDistrictWise() {
  return getDataFromApi(url.DISTRICTWISE_URL).then((data) => data);
}

//zonal data for a particular state
export async function getZones() {
  return getDataFromApi(url.ZONE_LIST).then((data) => data);
}

//country wide daily changes for graph
export async function getCountryDailyChanges() {
  return getDataFromApi(url.COUNTRY_DAILY_CHANGES).then(
    (data) => data.cases_time_series
  );
}

//state wide daily changes for graph
export async function getStateDailyChanges() {
  return getDataFromApi(url.STATE_DAILY_CHANGES).then(
    (data) => data.states_daily
  );
}
