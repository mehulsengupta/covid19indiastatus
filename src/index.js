import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import App from "./App";
import ErrorBoundary from "./components/errorhandling/ErrorBoundary";
import ErrorUI from "./components/errorhandling/ErrorUI";
import PageNotFound from "./components/errorhandling/PageNotFound";

//main routing to route between main page, error page and page not found
ReactDOM.render(
  <Router>
    <Switch>
      {/* to prevent unnecessary unmount and remount, render prop is used with inline*/}
      <Route
        path="/"
        exact
        render={() => (
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        )}
      />
      {/* For error page redirects */}
      <Route path="/error" component={ErrorUI} />
      {/* For all other invalid URLs */}
      <Route component={PageNotFound} />
    </Switch>
  </Router>,

  document.getElementById("root")
);
