export function formatNumbersWithComma(number) {
  return number < 1000 ? number : formatNumber(number);
}

//function to add commas according to the Indian system
const formatNumber = (number) => {
  let result = number.toString().substring(number.toString().length - 3);
  number = parseInt(number / 1000);
  do {
    const thousands = number % 100;
    result = (thousands < 10 ? "0" + thousands : thousands) + "," + result;
    number = parseInt(number / 100);
  } while (number !== 0);

  return result.startsWith("0") ? result.substring(1) : result;
};
