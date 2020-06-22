import React, { createContext } from "react";
import FadeIn from "react-fade-in";

import Main from "./mainviews/Main";
import NationalCount from "./mainviews/NationalCount";
import Timer from "./mainviews/Timer";
import Footer from "./headerfooter/Footer";
import tableHeader from "./constantvalues/tableHeaders";
import ScrollToTopButton from "./common/ScrollToTopButton";
import LoadingIndicator from "./loader/LoadingIndicator";
import "../components/mainviews/Sidebar/Sidebar.css";

//Home Page display
const HomePage = ({
  darkMode,
  toggleDarkMode,
  onReloadClick,
  apiData,
  initialLoad,
}) => {
  const {
    stateTotals,
    isStateLoading,
    districtTotals,
    isDistrictLoading,
    countryDailyChange,
    isCountryDailyChangeLoading,
    stateDailyChange,
    isStateDailyChangeLoading,
  } = apiData;

  //component tree & loader
  return initialLoad || isStateLoading ? (
    //using isStateLoading here complements the component level loader hence it won't
    //be visible & once data is loaded, it'll be directly available. Remove isStateLoading from
    //this condition to view it.
    <LoadingIndicator loaderType={tableHeader.INITIAL_LOADER} />
  ) : (
    <>
      <FadeIn
        delay={tableHeader.FADE_IN_COMPONENT_DELAY}
        transitionDuration={tableHeader.FADE_IN_TRANSITION_DURATION}
      >
        <Timer darkMode={darkMode} />
        <NationalCount
          toggleMode={toggleDarkMode}
          darkMode={darkMode}
          onReloadClick={onReloadClick}
          stateTotals={stateTotals}
          isStateLoading={isStateLoading}
        />
        <ApiDataContext.Provider
          value={{
            stateTotals,
            isStateLoading,
            districtTotals,
            isDistrictLoading,
            countryDailyChange,
            isCountryDailyChangeLoading,
            stateDailyChange,
            isStateDailyChangeLoading,
            darkMode,
          }}
        >
          <Main />
        </ApiDataContext.Provider>
        <Footer />
      </FadeIn>
      <ScrollToTopButton />
    </>
  );
};

export const ApiDataContext = createContext();

export default HomePage;
