import React, { Component } from "react";
import FeatureBtn from "./feature_btn";

class AppFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.sayHello = this.sayHello.bind(this);
  }

  sayHello() {
    console.log("hello");
  }

  render() {
    return (
      <div>
        <h1>Footer</h1>
        <button onClick={this.sayHello}>{this.state.hello}</button>
        <FeatureBtn />
        <FeatureBtn />
        <FeatureBtn />
      </div>
    );
  }
}

export default AppFooter