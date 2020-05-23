import React from "react";

import tableHeader from "../constantvalues/tableHeaders";
import { formatNumbersWithComma } from "../../utils/formatNumbersWithComma";

const LinearGradient = (props) => {
  if (props.criteria === tableHeader.ZONES)
    return (
      <div>
        <div id="gradientbox"></div>
        <div id="gradientbox"></div>
      </div>
    );

  const { data } = props;

  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${data.fromColor} , ${data.toColor})`,
  };

  return (
    <div>
      <div id="gradientbox" style={{ ...gradientStyle }}></div>
      <div id="gradientbox" className="samelinedivalign">
        <span>{data.min}</span>
        <span className="fill"></span>
        <span>
          {formatNumbersWithComma(
            data.max === data.min ? data.max + 1 : data.max
          )}
        </span>
      </div>
    </div>
  );
};

export default LinearGradient;
