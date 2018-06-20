import React, { Component } from "react";
import { connect } from "react-redux";
import { loadGame, authenticate } from "../actions/index";
import { Auth } from "aws-amplify";

class Game extends Component {
  async componentDidMount() {
    try {
      if (await Auth.currentSession()) {
        console.log("Auth: ", Auth.currentSession());
        console.log("logged in: ", this.props.authenticated);
        this.props.authenticate(true);
        console.log("logged in after: ", this.props.authenticated);
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
)(Game);
