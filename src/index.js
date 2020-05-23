import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import App from "./App";
import ErrorBoundary from "./components/errorhandling/ErrorBoundary";
import ErrorUI from "./components/errorhandling/ErrorUI";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/error" component={ErrorUI} />
      <ErrorBoundary>
        <Route exact path="/" component={App} />
      </ErrorBoundary>
    </Switch>
  </Router>,

  document.getElementById("root")
);
