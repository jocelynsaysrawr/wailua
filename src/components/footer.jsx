import React, { Component } from "react";
import FeatureBtn from "./feature_btn";
import { connect } from "react-redux";
import { signout } from "../actions/index";
import "../style/footer.scss";

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
      <div className="footer">
        <div className="b">
          <FeatureBtn link={"/story"} name={"Story"} />
        </div>
        <div className="b">
          <FeatureBtn link={"/photos"} name={"Pictures"} />
        </div>
        <div className="b">
          <FeatureBtn link={"/game"} name={"Game"} />
        </div>
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
