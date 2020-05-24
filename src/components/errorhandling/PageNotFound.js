import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

function PageNotFound() {
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTimer(timer - 1);
    }, 1000);
    return () => clearTimeout(timerId);
  });

  return (
    <>
      {timer > 0 ? (
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg errorheading">
              {"There's nothing in here!"}
            </div>
          </div>
          <div className="row">
            <div className="col-lg errorbody">
              {"You seem to have typed a WRONG URL."}
            </div>
          </div>
          <div className="row">
            <div className="col-lg reloadbutton">
              <a className="btn btn-primary" href="/">
                {`Redirecting in ${timer} second(s). Click to be redirected immediately`}
              </a>
            </div>
          </div>
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
}

export default PageNotFound;
