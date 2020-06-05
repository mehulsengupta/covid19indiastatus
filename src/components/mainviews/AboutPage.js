import React from "react";

import useDarkMode from "../../customhooks/useDarkMode";
import aboutInfo from "../constantvalues/aboutInfo";
import tableHeader from "../constantvalues/tableHeaders";
import Header from "../headerfooter/Header";
import { Link } from "react-router-dom";

//About the site
const AboutPage = () => {
  const { darkMode } = useDarkMode();

  const divstyle = "about" + (darkMode ? "dark" : "light");
  const headerstyle = darkMode ? "darkbody" : "lightbody";
  const headerdiv = darkMode ? "headerdivdark" : "headerdivlight";
  const datasourcelink = "datasourcelink" + (darkMode ? "dark" : "light");

  window.scrollTo(0, 0);

  return (
    <>
      <div className={headerstyle}>
        <Header darkMode={darkMode} />
      </div>
      <div className={divstyle}>
        <div>
          <h3 className={headerdiv}>About</h3>

          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-1">
                <Link className="btn btn-primary backbutton" to="/">
                  {"Back"}
                </Link>
              </div>
              <div className="aboutques col-lg-7">
                <h4>
                  <i className="fas fa-question"></i> {aboutInfo.QUESTION_1}
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="aboutques col-lg-6">
                <h5>
                  <i className="fas fa-arrow-right"></i> {aboutInfo.ANSWER_1}
                </h5>
              </div>
            </div>
            <br />
            <br />

            <div className="row">
              <div className="aboutques col-lg-6">
                <h5>
                  <i className="fas fa-dot-circle"></i> {aboutInfo.NOTE_11}
                  <a
                    className={datasourcelink}
                    href={tableHeader.API_HOME_PAGE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" database"}
                  </a>
                  {aboutInfo.NOTE_12}
                  {aboutInfo.NOTE_13}
                  <a
                    className={datasourcelink}
                    href={aboutInfo.MOHFW_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {aboutInfo.NOTE_14}
                  </a>
                </h5>
              </div>
            </div>
            <br />
            <br />

            <div className="row">
              <div className="aboutques col-lg-6">
                <h4>
                  <i className="fas fa-question"></i> {aboutInfo.QUESTION_2}
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="aboutques col-lg-6">
                <h5>
                  <i className="fas fa-arrow-right"></i> {aboutInfo.ANSWER_2}
                </h5>
              </div>
            </div>
            <br />

            <div className="row">
              <div className="aboutques col-lg-6">
                <h5>
                  <i className="fas fa-dot-circle"></i> {aboutInfo.NOTE_15}
                  <a
                    className={datasourcelink}
                    href={tableHeader.API_HOME_PAGE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {aboutInfo.NOTE_16}
                  </a>
                </h5>
              </div>
            </div>
            <br />

            <div className="row">
              <div className="aboutques col-lg-6">
                <h4>{aboutInfo.NOTE_17}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
