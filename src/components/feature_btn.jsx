import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/feature_btn.scss";

export default class FeatureBtn extends Component {
  render() {
    return (
      <div className="button">
        <Link to={this.props.link}>
          <button className="btn">{this.props.name}</button>
        </Link>
      </div>
    );
  }
}
