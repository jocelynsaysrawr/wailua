import React, { Component } from "react";

export default class FeatureBtn extends Component {
  render() {
    return (
      <div>
        <button>{this.props.name}</button>
      </div>
    );
  }
}
