import React, { Component } from "react";
import FeatureBtn from "./feature_btn";

export default class AppFooter extends Component {
  render() {
    return (
      <div>
        <h1>Footer</h1>
        <FeatureBtn link={"/"} name={"Map"} />
        <FeatureBtn link={"/story"} name={"Story"} />
        <FeatureBtn link={"/photos"} name={"Pictures"} />
        <FeatureBtn link={"/game"} name={"Game"} />
      </div>
    );
  }
}
