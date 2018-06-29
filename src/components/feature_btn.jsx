import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/feature_btn.scss";

export default class FeatureBtn extends Component {
  render() {
    return (
      <div className="button">
        <Link className="btn-nav" to={this.props.link}>
          {this.props.name}
        </Link>
      </div>
    );
  }
}
