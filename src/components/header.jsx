import React, { Component } from "react";
import ProgressBar from "./progress_bar";
import "../style/header.scss";
export default class AppHeader extends Component {
  render() {
    return (
      <div className="header">
        <div className="progressCircle">
          <ProgressBar />
        </div>
        <div className="headerText">
          <h1>Aina Finda</h1>
        </div>
      </div>
    );
  }
}