import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import LoadingOverlay from "react-loading-overlay";

import Main from "./components/mainviews/Main";
import Header from "./components/headerfooter/Header";
import NationalCount from "./components/mainviews/NationalCount";
import Timer from "./components/mainviews/Timer";
import Footer from "./components/headerfooter/Footer";
import Acknowledgement from "./components/mainviews/Acknowledgement";
import LoadingIndicator from "./components/loader/LoadingIndicator";
import useDarkMode from "./customhooks/useDarkMode";

function App() {
  const { promiseInProgress } = usePromiseTracker(); // destructuring - returns an object with named property
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <LoadingOverlay active={promiseInProgress} spinner={<LoadingIndicator />}>
      <div className={darkMode ? "darkbody" : "lightbody"}>
        <Header darkMode={darkMode} />
        <Timer darkMode={darkMode} />
        <NationalCount toggleMode={toggleDarkMode} darkMode={darkMode} />
        <Main darkMode={darkMode} />
        <Acknowledgement darkMode={darkMode} />
        <Footer />
      </div>
    </LoadingOverlay>
  );
}

export default App;
