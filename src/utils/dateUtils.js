export function formatDate(dateTimeNow) {
  const year = dateTimeNow.getFullYear();
  let month = dateTimeNow.getMonth() + 1;
  let day = dateTimeNow.getDate();
  let hours = dateTimeNow.getHours();
  let minutes = dateTimeNow.getMinutes();
  let seconds = dateTimeNow.getSeconds();

  const prefixZero = (datePart) => (datePart < 10 ? "0" + datePart : datePart);

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

export function dateConvertToLocalTimeZone(date) {
  return new Date(
    (0 - new Date().getTimezoneOffset() - 330) * 60 * 1000 +
      stringToDate(date).getTime()
  );
}

//format : dd/MM/YYYY HH:mm:ss
function stringToDate(date) {
  if (!isNaN(Date.parse(date))) return date;

  const dateTimeParts = date.split(" "); //split date time parts
  const datePart = dateTimeParts[0].split("/"); //split date parts to individual components
  const timePart = dateTimeParts[1].split(":"); //split time parts to individual components
  const day = datePart[0];
  const month = datePart[1];
  const year = datePart[2];
  const hour = timePart[0];
  const minute = timePart[1];
  const second = timePart[2];

  return new Date(year, month - 1, day, hour, minute, second);
}
