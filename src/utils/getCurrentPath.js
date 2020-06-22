export const getCurrentPath = (path) => {
  return path.endsWith("/about") ? "about" : "home";
};
