import React, { useState, useEffect, useRef } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import ErrorBoundary from "./components/errorhandling/ErrorBoundary";
import ErrorUI from "./components/errorhandling/ErrorUI";
import PageNotFound from "./components/errorhandling/PageNotFound";
import AboutPage from "./components/mainviews/AboutPage";
import useDarkMode from "./customhooks/useDarkMode";
import useScreenDetect from "./customhooks/useScreenDetect";
import tableHeader from "./components/constantvalues/tableHeaders";
import HomePage from "./components/HomePage";
import { useLoadData } from "./customhooks/useLoadData";
import Header from "./components/headerfooter/Header";
import SidebarItems from "./components/mainviews/Sidebar/SidebarItems";
import { getCurrentPath } from "./utils/getCurrentPath";

function App() {
  //detect screen size
  const screenSize = useScreenDetect();

  //dark vs light mode
  const { darkMode, toggleDarkMode } = useDarkMode();

  //check if page loading for first time to show spinner
  const [initialLoad, setInitialLoad] = useState(true);

  //Reload components on reload button click
  const onReloadClick = () => setInitialLoad(true);

  //Sidebar state - open or close
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  //toggle sidebar open close
  const toggleSidebar = () => setSidebarCollapsed((prevState) => !prevState);

  //check whether page loading for first time and set delay
  useEffect(() => {
    const loadTime = setTimeout(() => {
      setInitialLoad(false);
    }, tableHeader.INITIAL_LOAD_TIME);
    return () => clearTimeout(loadTime);
  });

  //eventhandler to close sidebar when clicked outside
  function handleClickOutside(event) {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target))
      setSidebarCollapsed(true);
  }

  //detect click outside sidebar
  const sidebarRef = useRef(null);

  //get current window location
  const location = useLocation();
  const currentPath = getCurrentPath(location.pathname);

  /** Get data from API - GLOBAL STORE to prevent repeated calls to API;
      using useContext. DATA PERSISTS between page refreshes & redirects 
      by React Router leading to instantaneous/lag-free/loading-free UI 
      changes; until the url is manually changed in the address bar. 
      A Redux/Flux like implementation for small to medium range apps with
      few API calls & action types. */

  const apiData = useLoadData(initialLoad); // fetch data from API only on initial loading & refresh

  return (
    <div onClick={handleClickOutside}>
      {/* edit head of index.html as per dark or light mode */}
      <Helmet>
        {darkMode ? (
          <style>{`body{background-color: rgb(41, 40, 40);}`}</style>
        ) : (
          <style>{`body{background-color: white;}`}</style>
        )}
      </Helmet>

      {sidebarCollapsed ? (
        <div className="sidebar sidebar-hidden">
          <SidebarItems />
        </div>
      ) : (
        <div
          ref={sidebarRef}
          className={`${
            darkMode ? "sidebar-dark" : "sidebar-light"
          } sidebar sidebar-show ${
            screenSize.isDesktoporLaptop || screenSize.isBigScreen
              ? "sidebar-width-big"
              : "sidebar-width-small"
          }`}
        >
          <SidebarItems
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            toggleSidebar={toggleSidebar}
            onReloadClick={onReloadClick}
            currentPath={currentPath}
          />
        </div>
      )}
      <Header
        sidebarCollapsed={sidebarCollapsed}
        darkMode={darkMode}
        toggleSidebar={toggleSidebar}
      />

      <Switch>
        {/* to prevent unnecessary unmount and remount, render prop is used with inline*/}
        <Route
          path="/"
          exact
          render={(props) => (
            <ErrorBoundary>
              <HomePage
                {...props}
                darkMode={darkMode}
                apiData={apiData}
                initialLoad={initialLoad}
              />
            </ErrorBoundary>
          )}
        />
        {/* About Page */}
        <Route
          path="/about"
          render={(props) => (
            <ErrorBoundary>
              <AboutPage {...props} darkMode={darkMode} />
            </ErrorBoundary>
          )}
        />
        {/* For error page redirects */}
        <Route
          path="/error"
          render={(props) => (
            <ErrorUI
              {...props}
              darkMode={darkMode}
              onReloadClick={onReloadClick}
            />
          )}
        />
        {/* For all other invalid URLs */}
        <Route
          /*component={PageNotFound}*/ render={(props) => (
            <PageNotFound {...props} darkMode={darkMode} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
