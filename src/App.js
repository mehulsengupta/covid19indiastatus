import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import FadeIn from "react-fade-in";

import Main from "./components/mainviews/Main";
import Header from "./components/headerfooter/Header";
import NationalCount from "./components/mainviews/NationalCount";
import Timer from "./components/mainviews/Timer";
import Footer from "./components/headerfooter/Footer";
import Acknowledgement from "./components/mainviews/Acknowledgement";
import useDarkMode from "./customhooks/useDarkMode";
import LoadingIndicator from "./components/loader/LoadingIndicator";
import tableHeader from "./components/constantvalues/tableHeaders";
import ScrollToTopButton from "./components/common/ScrollToTopButton";

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();
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

  //edit head of index.html as per dark or light mode
  return (
    <div>
      <Helmet>
        {darkMode ? (
          <style>{`body{background-color: rgb(41, 40, 40);}`}</style>
        ) : (
          <style>{`body{background-color: white;}`}</style>
        )}
      </Helmet>

      {/* show loading indicator for loading */}
      {initialLoad ? (
        <LoadingIndicator loaderType={tableHeader.INITIAL_LOADER} />
      ) : (
        <>
          <FadeIn
            delay={tableHeader.FADE_IN_COMPONENT_DELAY}
            transitionDuration={tableHeader.FADE_IN_TRANSITION_DURATION}
          >
            <Header darkMode={darkMode} />
            <Timer darkMode={darkMode} />
            <NationalCount
              toggleMode={toggleDarkMode}
              darkMode={darkMode}
              onReloadClick={onReloadClick}
            />
            <Main darkMode={darkMode} />
            <Acknowledgement darkMode={darkMode} />
            <Footer />
          </FadeIn>
          <ScrollToTopButton />
        </>
      )}
    </div>
  );
}

export default App;
