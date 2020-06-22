import React from "react";
import FadeIn from "react-fade-in";

import "../mainviews/Sidebar/Sidebar.css";
import tableHeader from "../constantvalues/tableHeaders";

function Header(props) {
  return (
    <FadeIn
      delay={tableHeader.FADE_IN_COMPONENT_DELAY}
      transitionDuration={tableHeader.FADE_IN_TRANSITION_DURATION}
    >
      <div
        className={`jumbotron-fluid ${
          props.darkMode ? "headerdivdark" : "headerdivlight"
        } sticky-top`}
      >
        <h1 className="h1">
          <button
            className="btn-non-outline btn-expand-sidebar"
            onClick={props.toggleSidebar}
          >
            <i className="fa fa-bars" aria-hidden="true" />
          </button>
          <i className="virusicon rotating"></i> COVID19 India Status{" "}
          <i className="virusicon rotating"></i>
        </h1>
        <h6 className="h6">
          A website reflecting the current situation under the COVID19 outbreak
          in India.
        </h6>
      </div>
    </FadeIn>
  );
}

export default Header;
