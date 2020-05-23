export function formatDate() {
  const dateTimeNow = new Date();

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
    prefixZero(seconds)
  );
}
