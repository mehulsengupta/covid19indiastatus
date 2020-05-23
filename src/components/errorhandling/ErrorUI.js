import React from "react";

import message from "../constantvalues/tableHeaders";

function ErrorUI() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg errorheading">{message.ERROR_HEADING}</div>
      </div>
      <div className="row">
        <div className="col-lg errorbody">{message.ERROR_MESSAGE}</div>
      </div>
      <div className="row">
        <div className="col-lg reloadbutton">
          <a className="btn btn-primary" href="/">
            {"Try Again"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ErrorUI;
