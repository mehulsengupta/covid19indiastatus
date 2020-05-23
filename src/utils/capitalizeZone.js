export default function capitalizeZone(zone) {
  let capitalizedValue = zone.charAt(0).toUpperCase();
  const remainder = zone.substring(1).toLowerCase();
  capitalizedValue = capitalizedValue.concat(remainder);
  return capitalizedValue.concat(" Zone");
}
