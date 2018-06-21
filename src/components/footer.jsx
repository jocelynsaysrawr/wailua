import React, { Component } from "react";
import FeatureBtn from "./feature_btn";
import { connect } from "react-redux";

class AppFooter extends Component {
  renderButton() {
    if (this.props.authenticated) {
      return <FeatureBtn link={"/login"} name={"Sign Out"} />;
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

export default connect(mapStateToProps)(AppFooter);
