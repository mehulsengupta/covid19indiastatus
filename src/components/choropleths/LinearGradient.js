import React from "react";

import tableHeader from "../constantvalues/tableHeaders";
import { formatNumbersWithComma } from "../../utils/formatNumbersWithComma";

//component to generate the linear gradient legend used in map
const LinearGradient = (props) => {
  //styling for dark vs light mode
  const gradientStyleMode = props.darkMode
    ? "gradientboxdark"
    : "gradientboxlight";

  //for zones, don't show gradient
  if (props.criteria === tableHeader.ZONES)
    return (
      <div>
        <div id={gradientStyleMode}></div>
        <div id={gradientStyleMode}></div>
      </div>
    );

  const { data } = props;

  //styling based on values for each list item
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${data.fromColor} , ${data.toColor})`,
  };

  return (
    <div>
      <div id={gradientStyleMode} style={{ ...gradientStyle }}></div>
      <div id={gradientStyleMode} className="samelinedivalign">
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
