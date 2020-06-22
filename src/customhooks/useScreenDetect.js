const { useMediaQuery } = require("react-responsive");

const useScreenDetect = () => {
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" });
  const isDesktoporLaptop = useMediaQuery({
    query: "(min-device-width: 720px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 240px)" });
  return {
    isBigScreen,
    isDesktoporLaptop,
    isTabletOrMobile,
  };
};

export default useScreenDetect;
