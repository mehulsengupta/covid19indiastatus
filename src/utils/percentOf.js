export default function percentOf(num1, num2) {
  const percent = ((num1 / num2) * 100).toFixed(2);
  return isNaN(percent) ? (0).toFixed(2) : percent;
}
