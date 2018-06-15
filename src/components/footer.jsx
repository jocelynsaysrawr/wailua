import React, { Component } from "react";
import FeatureBtn from "./feature_btn";

export default class AppFooter extends Component {
  render() {
    return (
      <div>
        <FeatureBtn link={"/"} name={"Map"} />
        <FeatureBtn link={"/story"} name={"Story"} />
        <FeatureBtn link={"/photos"} name={"Pictures"} />
        <FeatureBtn link={"/game"} name={"Game"} />
      </div>
    );
  }
}
