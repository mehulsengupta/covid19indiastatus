import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";

function PageNotFound(props) {
  const style = props.darkMode ? "dark" : "light";

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
            <div className={"col-lg errorheading" + style}>
              {"There's nothing in here!"}
            </div>
          </div>
          <div className="row">
            <div className={"col-lg errorbody" + style}>
              {"You seem to have typed a WRONG URL."}
            </div>
          </div>
          <div className="row">
            <div className="col-lg reloadbutton">
              <Link to="/" className="btn btn-primary">
                {`Redirecting in ${timer} second(s). Click to be redirected immediately`}
              </Link>
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
