import tableHeader from "../constantvalues/tableHeaders";

export function getDropDownGraph() {
  return [tableHeader.CONFIRMED, tableHeader.RECOVERED, tableHeader.DEATHS];
}
