export function formatDate(dateTimeNow) {
  const year = dateTimeNow.getFullYear();
  let month = dateTimeNow.getMonth() + 1;
  let day = dateTimeNow.getDate();
  let hours = dateTimeNow.getHours();
  let minutes = dateTimeNow.getMinutes();
  let seconds = dateTimeNow.getSeconds();

  return (
    prefixZero(day) +
    "/" +
    prefixZero(month) +
    "/" +
    year +
    " " +
    prefixZero(hours) +
    ":" +
    prefixZero(minutes) +
    ":" +
    prefixZero(seconds) +
    " (Zone: " +
    Intl.DateTimeFormat().resolvedOptions().timeZone +
    ")"
  );
}

//returns a timevalue in local time zone
export function dateConvertToLocalTimeZone(date) {
  return new Date(
    //changes (+/-) wrt IST (330 minutes from UTC) and add differences
    (0 - new Date().getTimezoneOffset() - 330) * 60 * 1000 +
      stringToDate(date).getTime()
  );
}

//format : dd/MM/YYYY HH:mm:ss
function stringToDate(date) {
  const [datePart, timePart] = date.split(" "); //split date time parts
  const [day, month, year] = datePart.split("/"); //split date parts to individual components
  const [hour, minute, second] = timePart.split(":"); //split time parts to individual components

  return new Date(year, month - 1, day, hour, minute, second);
}

const prefixZero = (datePart) => (datePart < 10 ? "0" + datePart : datePart);
