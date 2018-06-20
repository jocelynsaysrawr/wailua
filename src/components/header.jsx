import React, { Component } from "react";
import ProgressBar from "./progress_bar";
import "../style/header.scss";
export default class AppHeader extends Component {
  render() {
    return (
      <div className="header">
        <h1>Wailua</h1>
        <div className="progressCircle">
          <ProgressBar />
        </div>
      </div>
    );
  }
}