//to format string to lower case and replace spaces with underscore
export default function formatString(criteria) {
  let criteriaFormatted = "";
  criteria = criteria.trim().toLowerCase();
  for (const letter of criteria) {
    if (letter === " ") criteriaFormatted = criteriaFormatted.concat("_");
    else criteriaFormatted = criteriaFormatted.concat(letter);
  }
  return criteriaFormatted;
}
