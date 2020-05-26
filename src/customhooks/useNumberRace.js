import { useState, useEffect } from "react";

function useNumberRace(criteria) {
  const localStorage = window.localStorage;

  const getInitialNumber = () => {
    const numberOfDelta = JSON.parse(
      localStorage.getItem(criteria.toLowerCase())
    );
    return numberOfDelta > 0 ? numberOfDelta : 0;
  };
  const [numberOf, setNumberOf] = useState(getInitialNumber());

  const changeValue = (value) => {
    if (numberOf === value) return;
    else if (numberOf < value)
      value - numberOf >= 75
        ? setNumberOf(numberOf + 75)
        : setNumberOf(numberOf + 1);
    else
      numberOf - value >= 75
        ? setNumberOf(numberOf - 75)
        : setNumberOf(numberOf - 1);
  };

  useEffect(() => {
    localStorage.setItem(criteria.toLowerCase(), JSON.stringify(numberOf));
  }, [criteria, numberOf, localStorage]);

  return [numberOf, changeValue];
}

export default useNumberRace;
