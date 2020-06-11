import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

import ErrorBoundary from "./components/errorhandling/ErrorBoundary";
import ErrorUI from "./components/errorhandling/ErrorUI";
import PageNotFound from "./components/errorhandling/PageNotFound";
import AboutPage from "./components/mainviews/AboutPage";
import useDarkMode from "./customhooks/useDarkMode";
import tableHeader from "./components/constantvalues/tableHeaders";
import HomePage from "./components/HomePage";
import { useLoadData } from "./customhooks/useLoadData";

function App() {
  //dark vs light mode
  const { darkMode, toggleDarkMode } = useDarkMode();

  //check if page loading for first time to show spinner
  const [initialLoad, setInitialLoad] = useState(true);

  //Reload components on reload button click
  const onReloadClick = () => setInitialLoad(true);

  //check whether page loading for first time and set delay
  useEffect(() => {
    const loadTime = setTimeout(() => {
      setInitialLoad(false);
    }, tableHeader.INITIAL_LOAD_TIME);
    return () => clearTimeout(loadTime);
  });

  /** Get data from API - GLOBAL STORE to prevent repeated calls to API;
      using useContext. DATA PERSISTS between page refreshes & redirects 
      by React Router leading to instantaneous/lag-free/loading-free UI 
      changes; until the url is manually changed in the address bar. 
      A Redux/Flux like implementation for small to medium range apps with
      few API calls & action types. */
  const apiData = useLoadData();

  return (
    <>
      {/* edit head of index.html as per dark or light mode */}
      <Helmet>
        {darkMode ? (
          <style>{`body{background-color: rgb(41, 40, 40);}`}</style>
        ) : (
          <style>{`body{background-color: white;}`}</style>
        )}
      </Helmet>

      {/* Header can be used here as a common component to all pages */}
      {/* <Header /> */}
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
                toggleDarkMode={toggleDarkMode}
                onReloadClick={onReloadClick}
                apiData={apiData}
                initialLoad={initialLoad}
              />
            </ErrorBoundary>
          )}
        />
        {/* About Page */}
        <Route
          path="/about"
          render={() => (
            <ErrorBoundary>
              <AboutPage />
            </ErrorBoundary>
          )}
        />
        {/* For error page redirects */}
        <Route
          path="/error"
          render={(props) => <ErrorUI {...props} darkMode={darkMode} />}
        />
        {/* For all other invalid URLs */}
        <Route
          /*component={PageNotFound}*/ render={(props) => (
            <PageNotFound {...props} darkMode={darkMode} />
          )}
        />
      </Switch>
    </>
  );
}

export default App;
