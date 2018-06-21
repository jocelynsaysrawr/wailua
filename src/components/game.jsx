import React, { Component } from "react";
import { connect } from "react-redux";
import { loadGame, authenticate } from "../actions/index";
import { Auth } from "aws-amplify";
import requireAuth from "../components/require_auth";

class Game extends Component {
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
    this.props.loadGame(false);
  }

  render() {
    return (
      !this.props.isAuthenticating && (
        <div>
          <h1>Game</h1>
          {this.props.authenticated ? <p>Logged In</p> : <p>Logged Out</p>}
        </div>
      )
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.authenticated,
    isAuthenticating: state.isAuthenticating
  };
};

export default connect(
  mapStateToProps,
  { loadGame, authenticate }
)(requireAuth(Game));
