import tableHeader from "../constantvalues/tableHeaders";

export function getDropDown() {
  return [
    tableHeader.CONFIRMED,
    tableHeader.ACTIVE,
    tableHeader.RECOVERED,
    tableHeader.DECEASED,
    tableHeader.RECOVERY_RATE,
    tableHeader.DEATH_RATE,
    tableHeader.ZONES,
  ];
}
