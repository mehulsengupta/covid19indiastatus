import mapConstants from "../constantvalues/mapConstants";
import { getDropDown } from "./getDropDownState";

export function getColorRange(criteria) {
  const dropDownMenu = getDropDown();
  return criteria === dropDownMenu[0]
    ? mapConstants.COLOR_RANGE_CONFIRMED
    : criteria === dropDownMenu[1]
    ? mapConstants.COLOR_RANGE_ACTIVE
    : criteria === dropDownMenu[2] || criteria === dropDownMenu[4]
    ? mapConstants.COLOR_RANGE_RECOVERED
    : mapConstants.COLOR_RANGE_DEATHS;
}
