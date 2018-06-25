import React, { Component } from "react";
import FeatureBtn from "./feature_btn";
import "../style/footer.scss";

export default class AppFooter extends Component {
  render() {
    return (
      <div className="footer">
        <div className="b">
          <FeatureBtn link={"/"} name={"Map"} />
        </div>
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
