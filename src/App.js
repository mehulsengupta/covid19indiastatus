import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import LoadingOverlay from "react-loading-overlay";

import Main from "./components/mainviews/Main";
import Header from "./components/headerfooter/Header";
import NationalCount from "./components/mainviews/NationalCount";
import Timer from "./components/mainviews/Timer";
import Footer from "./components/headerfooter/Footer";
import LoadingIndicator from "./components/loader/LoadingIndicator";

function App() {
  const { promiseInProgress } = usePromiseTracker(); // destructuring - returns an object with named property
  return (
    <LoadingOverlay active={promiseInProgress} spinner={<LoadingIndicator />}>
      <Header className="header" />
      <Timer />
      <NationalCount />
      <Main />
      <Footer />
    </LoadingOverlay>
  );
}

export default App;
