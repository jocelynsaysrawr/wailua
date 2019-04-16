import React, { Component } from "react";
import { authenticate, signout } from "../actions/index";
import { Auth } from "aws-amplify";
import requireAuth from "../componenets/require_auth";
import { connect } from "net";

class Resources extends Component {
  async componentDidMount() {
    try {
      if (await Auth.currentSession()) {
        this.props.authenticate(true);
      }
    } catch (e) {
      if (e !== "No current user") {
        alert(e);
      }
    }
  }
  render() {
    return (
      <div>
        Resources
        <button className="btn-signout" onClick={this.props.signout}>
          Sign Out
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.authenticated
  };
};

export default connect(
  mapStateToProps,
  { authenticate, signout }
)(requireAuth(Resources));
