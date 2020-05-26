import { useState, useEffect } from "react";

function useDarkMode() {
  const localStorage = window.localStorage;

  const getPreferredColorScheme = () => {
    //if matchMedia is present in the window - feature detection
    if (!window.matchMedia) return;
    //return if dark preferred true or false - querystring
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const getInitialMode = () => {
    const isReturningUser = "darkmode" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("darkmode"))
      ? true
      : false;
    const userPrefersDark = getPreferredColorScheme();
    //if user has visited earlier and key darkmode is present in local storage
    //else check user preference and return accordingly
    return isReturningUser ? savedMode : userPrefersDark ? true : false;
  };

  const [darkMode, setDarkMode] = useState(getInitialMode());

  //update based on previous value
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    localStorage.setItem("darkmode", JSON.stringify(darkMode));
  }, [localStorage, darkMode]);

  return { darkMode, toggleDarkMode };
}

export default useDarkMode;
