import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class FeatureBtn extends Component {
  render() {
    return (
      <div>
        <Link to={this.props.link}>
          <button className="feature-btn">{this.props.name}</button>
        </Link>
      </div>
    );
  }
}
