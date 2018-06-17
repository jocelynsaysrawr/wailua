import React, { Component } from "react";
import ProgressBar from "./progress_bar";
export default class AppHeader extends Component {
  render() {
    return (
      <div>
        <h1>Wailua</h1>
        <div className="progressCircle">
          <ProgressBar />
        </div>
      </div>
    );
  }
}
