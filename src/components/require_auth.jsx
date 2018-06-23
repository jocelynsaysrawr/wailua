import React, { Component } from "react";
import { connect } from "react-redux";
import { Auth } from "aws-amplify";
import { authenticate } from "../actions/index";

export default function(ComposedComponent) {
  class Authentication extends Component {
    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    async shouldNavigateAway() {
      console.log("authNav: ", this.props.authenticated);
      if ((await !Auth.currentSession()) || !this.props.authenticated) {
        console.log("history: ", this.props.history);
        this.props.history.push("/login");
      }
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    return { authenticated: state.authenticated };
  };

  return connect(
    mapStateToProps,
    { authenticate }
  )(Authentication);
}
