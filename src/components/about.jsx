import React, { Component } from "react";
import { AboutFragment } from "../story_fragments/about-fragment";
import "../style/about.scss";

class AboutPage extends Component {
  render() {
    return (
      <div className="about-container">
        <h1 className="underlined">About the Ahupuaʻa of Wailua</h1>
        {AboutFragment()}
      </div>
    );
  }
}

export default AboutPage;
