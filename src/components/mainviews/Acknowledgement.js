import React from "react";
import { Link } from "react-router-dom";

import tableHeader from "../constantvalues/tableHeaders";

//component to show link to API, About, Github repo & contact info
const Acknowledgement = ({ darkMode }) => {
  const mode = darkMode ? "dark" : "light";

  return (
    <>
      <br />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg">
            <a
              className={"datasourcelink" + mode}
              href={tableHeader.API_HOME_PAGE_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`apidiv${mode}`}>
                <i className="fas fa-database"></i> {"     "}
                {tableHeader.DATASOURCE}
              </div>
            </a>
            <br />
          </div>

          <div className="col-lg">
            <Link className={"datasourcelink" + mode} to="/about">
              <div className={`apidiv${mode}`}>
                <i className="fas fa-info-circle"></i> {"     "}
                {tableHeader.ABOUT}
              </div>
            </Link>
            <br />
          </div>

          {/* justify-content-center align-items-center */}
          <div className="col-lg">
            <a
              className={"datasourcelink" + mode}
              href={tableHeader.GITHUB_REPO_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`apidiv${mode}`}>
                <i className="fab fa-github"></i> {"     "}
                {tableHeader.GITHUB_REPO}
              </div>
            </a>
            <br />
          </div>

          <div className="col-lg">
            <a
              className={"datasourcelink" + mode}
              href={"mailto:" + tableHeader.EMAIL_ME}
            >
              <div className={`apidiv${mode}`}>
                <i className="fas fa-envelope"></i> {"     "}
                {tableHeader.CONTACT}
              </div>
            </a>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Acknowledgement;
