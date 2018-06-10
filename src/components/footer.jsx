import React, { Component } from "react";
import FeatureBtn from "./feature_btn";

export default class AppFooter extends Component {
  render() {
    return (
      <div>
        <h1>Footer</h1>
        <FeatureBtn name={"Story"} />
        <FeatureBtn name={"Pictures"} />
        <FeatureBtn name={"Game"} />
      </div>
    );
  }
}
