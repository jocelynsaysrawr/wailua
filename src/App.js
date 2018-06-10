import React, { Component } from "react";
import AppFooter from "./components/footer";
// import NavList from "./components/nav_list";
import "./App.css";
import Map from "./components/map";
import Photos from "./components/photo_page";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map />
      </div>
    );
  }
}

export default App;
