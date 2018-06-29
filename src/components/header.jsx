import React, { Component } from "react";
import HamburgerMenu from "./hamburger_menu";
import "../style/header.scss";

export default class AppHeader extends Component {
  render() {
    return (
      <div className="App-header">
        <div className="header">
          <h1>Aina Finda</h1>
        </div>
        <div className="hamburger">
          <HamburgerMenu />
        </div>
      </div>
    );
  }
}
