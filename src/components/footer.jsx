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
    console.log(this.props.toggleHidden);
    return (
      <div>
        <FeatureBtn onClick={this.props.toggleHidden} name={"Map"} />
        <FeatureBtn name={"Story"} />
        <FeatureBtn name={"Pictures"} />
        <FeatureBtn name={"Game"} />
      </div>
    );
  }
}

export default AppFooter

