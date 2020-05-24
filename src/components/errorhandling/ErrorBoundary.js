import React, { Component } from "react";
import { Redirect } from "react-router-dom";

//component to generate generic error page
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  //update state in case of error
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  //to log errors - not required in production
  componentDidCatch(error, info) {
    //console.log(error, info );
  }

  //redirect to error page in case of error
  render() {
    if (this.state.hasError) {
      return <Redirect to="/error" />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
