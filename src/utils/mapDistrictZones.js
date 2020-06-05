import { getZoneColor } from "./getZoneColor";
import tableHeader from "../components/constantvalues/tableHeaders";

const mapDistrictZones = (selectedState, zones) => {
  const [concernedState] = selectedState;

  const stateZones = zones.filter(
    (zone) => zone.statecode === concernedState.statecode
  );

  //separate processing only for Sikkim Zones due to incorrect API data
  if (concernedState.statecode === tableHeader.SIKKIM_CODE) {
    stateZones.map((stateZone) =>
      Object.assign(stateZone, {
        district: stateZone.district.endsWith(tableHeader.DISTRICT)
          ? stateZone.district.replace(tableHeader.DISTRICT, tableHeader.SIKKIM)
          : stateZone.district,
      })
    );
  }

  concernedState.districtData.map((_district) =>
    Object.assign(_district, { color: getZoneColor(stateZones, _district) })
  );
};
export default mapDistrictZones;
