import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/header.scss";

export default class AppHeader extends Component {
  render() {
    return (
      <div className="App-header">
        <div className="header">
          <Link to={"/"}>
            <h1>Aina Finda</h1>
          </Link>
        </div>
      </div>
    );
  }
}
