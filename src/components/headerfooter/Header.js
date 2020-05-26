import React from "react";

function Header(props) {
  return (
    <div
      className={`jumbotron-fluid ${
        props.darkMode ? "headerdivdark" : "headerdivlight"
      }`}
    >
      <h1 className="h1">
        <i className="virusicon"></i> COVID19 India Status{" "}
        <i className="virusicon"></i>
      </h1>
      <h6 className="h6">
        A website reflecting the current situation under the COVID19 outbreak in
        India.
      </h6>
    </div>
  );
}

export default Header;
