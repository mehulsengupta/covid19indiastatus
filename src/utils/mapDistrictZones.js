import { getZoneColor } from "./getZoneColor";

const mapDistrictZones = (selectedState, zones) => {
  const stateZones = zones.filter(
    (zone) => zone.statecode === selectedState[0].statecode
  );

  selectedState[0].districtData.map((_district) =>
    Object.assign(_district, { color: getZoneColor(stateZones, _district) })
  );
};
export default mapDistrictZones;
