export function getGradientData(data, COLOR_RANGE) {
  const arrayOfValues = data.map((currentState) => currentState.value);

  return {
    fromColor: COLOR_RANGE[0],
    toColor: COLOR_RANGE[COLOR_RANGE.length - 1],
    min: Math.min(...arrayOfValues),
    max: Math.max(...arrayOfValues),
  };
}
