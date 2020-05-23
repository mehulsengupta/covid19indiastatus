import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  state = {
    errorMessage: "",
    info: "",
  };

  // static getDerivedStateFromError(error) {
  //   return {
  //     errorMessage: error.toString(),
  //   };
  // }

  componentDidCatch(error, info) {
    this.setState({ errorMessage: error, info: info });
  }

  render() {
    if (this.state.errorMessage) {
      return <Redirect to="/error" />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
