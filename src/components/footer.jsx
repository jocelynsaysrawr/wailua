import React, { Component } from "react";
import FeatureBtn from "./feature_btn";
import { connect } from "react-redux";
import { signout } from "../actions/index";

class AppFooter extends Component {
  renderButton() {
    if (this.props.authenticated) {
      return <button onClick={this.props.signout}>Sign Out</button>;
    } else {
      return <FeatureBtn link={"/game"} name={"Login"} />;
    }
  }
  render() {
    return (
      <div>
        <FeatureBtn link={"/"} name={"Map"} />
        <FeatureBtn link={"/story"} name={"Story"} />
        <FeatureBtn link={"/photos"} name={"Pictures"} />
        <FeatureBtn link={"/game"} name={"Game"} />
        {this.renderButton()}
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
  { signout }
)(AppFooter);
