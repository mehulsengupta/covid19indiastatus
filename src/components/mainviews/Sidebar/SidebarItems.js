import React from "react";
import { Link } from "react-router-dom";

import "./Sidebar.css";
import tableHeader from "../../constantvalues/tableHeaders";

const SidebarItems = ({
  darkMode,
  toggleSidebar,
  toggleDarkMode,
  onReloadClick,
  currentPath,
}) => {
  const mode = darkMode ? "dark" : "light";
  const home = currentPath === "home" ? true : false;
  const about = currentPath === "about" ? true : false;

  return (
    <>
      <div className="container-fluid">
        <div className="row sidebar-heading-container">
          <div className="col-10">
            <div className="h6 sidebar-heading">
              <i className="virusicon" />
              &nbsp;&nbsp;
              {"COVID19 INDIA STATUS"}
            </div>
          </div>
          <div className="col-2">
            <button onClick={toggleSidebar} className="btn-non-outline">
              <i className="fa fa-times" />
            </button>
          </div>
        </div>
        <Link to="/" className="sidebar-item-link">
          <div className="row">
            <div
              className={`col sidebar-item-container sidebar-item-container-${mode} ${
                home ? "selected-route-background-color-" + mode : ""
              }`}
            >
              <i className={`${home ? "rotating" : ""} virusicon`} />
              &nbsp;&nbsp;{"HOME"}
            </div>
          </div>
        </Link>

        <Link to="/about" className="sidebar-item-link">
          <div className="row">
            <div
              className={`col sidebar-item-container sidebar-item-container-${mode} ${
                about ? "selected-route-background-color-" + mode : ""
              }`}
            >
              <i
                className={`${
                  about ? "rotating" : ""
                } fas fa-info-circle fa-2x`}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;{tableHeader.ABOUT}
            </div>
          </div>
        </Link>

        <a
          href={tableHeader.SYMPTOMS_LINK}
          className="sidebar-item-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="row">
            <div
              className={`${
                "col sidebar-item-container sidebar-item-container-" + mode
              }`}
            >
              <i className="fas fa-external-link-square-alt fa-2x" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{tableHeader.SYMPTOMS}
            </div>
          </div>
        </a>

        <a
          href={tableHeader.PREVENTION_LINK}
          className="sidebar-item-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="row">
            <div
              className={`${
                "col sidebar-item-container sidebar-item-container-" + mode
              }`}
            >
              <i className="fas fa-external-link-square-alt fa-2x" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{tableHeader.PREVENTION}
            </div>
          </div>
        </a>

        <a
          href={tableHeader.FAQ_LINK}
          className="sidebar-item-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="row">
            <div
              className={`${
                "col sidebar-item-container sidebar-item-container-" + mode
              }`}
            >
              <i className="fas fa-external-link-square-alt fa-2x" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{tableHeader.FAQ}
            </div>
          </div>
        </a>

        <a
          href={tableHeader.API_HOME_PAGE_LINK}
          className="sidebar-item-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="row">
            <div
              className={`${
                "col sidebar-item-container sidebar-item-container-" + mode
              }`}
            >
              <i className="fas fa-database fa-2x" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{tableHeader.DATASOURCE}
            </div>
          </div>
        </a>

        <a
          href={tableHeader.GITHUB_REPO_LINK}
          className="sidebar-item-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="row">
            <div
              className={`${
                "col sidebar-item-container sidebar-item-container-" + mode
              }`}
            >
              <i className="fab fa-github fa-2x" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{tableHeader.GITHUB_REPO}
            </div>
          </div>
        </a>

        <a
          href={"mailto:" + tableHeader.EMAIL_ME}
          className="sidebar-item-link"
        >
          <div className="row">
            <div
              className={`${
                "col sidebar-item-container sidebar-item-container-" + mode
              }`}
            >
              <i className="fas fa-envelope fa-2x" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{tableHeader.CONTACT}
            </div>
          </div>
        </a>
        <div className="row">
          <div className="col mode-change-icon">
            <button
              className={`${darkMode ? "toggleicondark" : "toggleiconlight"}`}
              onClick={toggleDarkMode}
            >
              <i
                className={darkMode ? "fas fa-sun fa-3x" : "fas fa-moon fa-3x"}
                title={"Switch to " + (darkMode ? "day mode" : "night mode")}
              ></i>
            </button>
          </div>
          <div className="col refresh-icon">
            <button
              className={`${darkMode ? "reloadicondark" : "reloadiconlight"}`}
              onClick={onReloadClick}
            >
              <i className="fas fa-sync-alt fa-3x" title="Update data"></i>
            </button>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="call-to-container">
            {tableHeader.GOVT_CONTACT_HDR}
            {/* <i className="fas fa-envelope fa-2x" /> */}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <ul>
              <li>
                <a
                  className="sidebar-item-link call-to"
                  href={"tel:" + tableHeader.GOVT_CONTACT_TF}
                >
                  {tableHeader.GOVT_CONTACT_TF}
                </a>
                {" (Toll Free)"}
              </li>
              <li>
                <a
                  className="sidebar-item-link call-to"
                  href={"tel:" + tableHeader.GOVT_CALL_LL_LINK}
                >
                  {tableHeader.GOVT_CONTACT_LL}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarItems;
