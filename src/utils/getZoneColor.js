export function getZoneColor(zonesList, _district) {
  const color = zonesList.filter(
    (zone) => zone.district === _district.district
  );
  return typeof color[0] === "undefined" ? "" : color[0].zone;
}
