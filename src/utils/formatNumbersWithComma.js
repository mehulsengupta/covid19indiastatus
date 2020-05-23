export function formatNumbersWithComma(number) {
  return number < 1000 ? number : formatNumber(number);
}

//function to add commas according to the Indian system
const formatNumber = (number) => {
  let result = number.toString().substring(number.toString().length - 3);
  number = parseInt(number / 1000);
  do {
    result = (number % 100) + "," + result;
    number = parseInt(number / 100);
  } while (number !== 0);

  return result;
};
