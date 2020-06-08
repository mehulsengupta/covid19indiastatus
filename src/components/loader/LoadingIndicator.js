import React from "react";
import Loader from "react-loader-spinner";

import tableHeader from "../constantvalues/tableHeaders";

//Generic Loading Component - for both initial as well as component loading
function LoadingIndicator({ loaderType = tableHeader.DEFAULT_LOADER }) {
  const loaderStyle =
    loaderType === tableHeader.INITIAL_LOADER
      ? {
          position: "absolute",
          top: "50%",
          left: "50%",
          marginLeft: "-50px",
          marginTop: "-50px",
        }
      : {
          width: "100%",
          height: "100",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        };

  return (
    <div style={loaderStyle}>
      <Loader
        type={loaderType}
        color={tableHeader.LOADER_COLOR}
        height="100"
        width="100"
      />
    </div>
  );
}

export default LoadingIndicator;
