export function getZoneColor(zonesList, _district) {
  const zoneColor = zonesList.filter(
    (zone) => zone.district === _district.district
  );

  const [color] = zoneColor;

  return typeof color === "undefined" ? "" : color.zone;
}
