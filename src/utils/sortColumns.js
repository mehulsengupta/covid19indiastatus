import { compareAscending, compareDescending } from "./compare";

import sortTypes from "../components/constantvalues/sortTypes";

export function sortColumns(stateTotalsList, sortOrder, type) {
  sortOrder === sortTypes.ASCENDING
    ? stateTotalsList.sort(compareAscending(type))
    : stateTotalsList.sort(compareDescending(type));
}
