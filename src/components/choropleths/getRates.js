import tableHeader from "../constantvalues/tableHeaders";
import percentOf from "../../utils/percentOf";
import mapConstants from "../constantvalues/mapConstants";

export function getRates(totals, criteria, type) {
  const data = [];
  //For States
  type === mapConstants.MAP_TYPE_STATE
    ? totals.map((_districtsList) =>
        _districtsList.districtData.map((_district) => {
          const _districtData = {};
          Object.assign(_districtData, {
            id: _district.district,
            state: _district.district,
            value:
              criteria === tableHeader.RECOVERY_RATE
                ? percentOf(
                    parseInt(_district[tableHeader.RECOVERED.toLowerCase()]),
                    parseInt(_district[tableHeader.CONFIRMED.toLowerCase()])
                  )
                : percentOf(
                    parseInt(_district[tableHeader.DECEASED.toLowerCase()]),
                    parseInt(_district[tableHeader.CONFIRMED.toLowerCase()])
                  ),
            criteria,
          });
          data.push(_districtData);

          return data;
        })
      )
    : //for country
      totals.map((stateData) => {
        const _stateData = {};
        Object.assign(_stateData, {
          id: stateData.statecode,
          state: stateData.state,
          value:
            criteria === tableHeader.RECOVERY_RATE
              ? percentOf(
                  parseInt(stateData[tableHeader.RECOVERED.toLowerCase()]),
                  parseInt(stateData[tableHeader.CONFIRMED.toLowerCase()])
                )
              : percentOf(
                  parseInt(stateData[tableHeader.DEATHS.toLowerCase()]),
                  parseInt(stateData[tableHeader.CONFIRMED.toLowerCase()])
                ),
          criteria,
        });
        data.push(_stateData);
        return data;
      });

  return data;
}
