import axios from "axios";
import { trackPromise } from "react-promise-tracker";

import url from "../components/constantvalues/url";

//statewise data
export async function getStateWise() {
  return await trackPromise(
    axios
      .get(url.STATEWISE_URL)
      .then((response) => {
        return response.data.statewise;
      })
      .catch((err) => JSON.stringify(err))
  );
}

//district wise data for a particular state
export async function getDistrictWise() {
  return await trackPromise(
    axios
      .get(url.DISTRICTWISE_URL)
      .then((response) => {
        return response.data;
      })
      .catch((error) => JSON.stringify(error))
  );
}

//zonal data for a particular state
export async function getZones() {
  return await trackPromise(
    axios
      .get(url.ZONE_LIST)
      .then((response) => {
        return response.data;
      })
      .catch((error) => JSON.stringify(error))
  );
}

//country wide daily changes for graph
export async function getCountryDailyChanges() {
  return await trackPromise(
    axios
      .get(url.COUNTRY_DAILY_CHANGES)
      .then((response) => response.data.cases_time_series)
      .catch((error) => JSON.stringify(error))
  );
}

//state wide daily changes for graph
export async function getStateDailyChanges() {
  return await trackPromise(
    axios
      .get(url.STATE_DAILY_CHANGES)
      .then((response) => response.data.states_daily)
      .catch((error) => JSON.stringify(error))
  );
}
