import React from "react";

import message from "../constantvalues/tableHeaders";
import { Link } from "react-router-dom";

function ErrorUI({ darkMode, onReloadClick, history }) {
  const style = darkMode ? "dark" : "light";

  return (
    <div className="container-fluid">
      <div className="row">
        <div className={"col-lg errorheading" + style}>
          {message.ERROR_HEADING}
        </div>
      </div>
      <div className="row">
        <div className={"col-lg errorbody" + style}>
          {message.ERROR_MESSAGE}
        </div>
      </div>
      <div className="row">
        <div className="col-lg reloadbutton">
          <Link
            to="/"
            className="btn btn-primary"
            onClick={() => onReloadClick()}
          >
            {"Try Again"}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorUI;
