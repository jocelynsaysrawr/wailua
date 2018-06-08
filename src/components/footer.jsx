import React, { Component } from "react";
import FeatureBtn from "./feature_btn";

class AppFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
  }

  render() {
    return (
      <div>
        <h1>Footer</h1>
        <FeatureBtn />
        <FeatureBtn />
        <FeatureBtn />
      </div>
    );
  }
}

export default AppFooter