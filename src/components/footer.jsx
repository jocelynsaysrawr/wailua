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
        <div id="nav-a" className="b">
          <FeatureBtn link={"/photos"} name={"Look"} />
        </div>
        <div id="nav-b" className="b">
          <FeatureBtn link={"/story"} name={"Read"} />
        </div>

        <div id="nav-c" className="b">
          <FeatureBtn link={"/game"} name={"Play"} />
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
