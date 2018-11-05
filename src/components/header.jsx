import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/AF_FinalDuo2.png";
import "../style/header.scss";

export default class AppHeader extends Component {
  render() {
    return (
      <div className="App-header">
        <div className="header">
          <Link to={"/"}>
            <img src={logo} alt="aina finda logo" />
          </Link>
        </div>
      </div>
    );
  }
}
