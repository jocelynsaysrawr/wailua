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
        <FeatureBtn name={"Story"} />
        <FeatureBtn name={"Pictures"} />
        <FeatureBtn name={"Game"} />
      </div>
    );
  }
}

export default AppFooter