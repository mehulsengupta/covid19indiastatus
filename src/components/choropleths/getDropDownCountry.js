import tableHeader from "../constantvalues/tableHeaders";

export function getDropDown() {
  return [
    tableHeader.CONFIRMED,
    tableHeader.ACTIVE,
    tableHeader.RECOVERED,
    tableHeader.DEATHS,
    tableHeader.RECOVERY_RATE,
    tableHeader.DEATH_RATE,
  ];
}
