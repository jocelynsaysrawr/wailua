import React, { Component } from "react";
// import NavList from "./components/nav_list";
import "./App.css";
import Map from "./components/map";
import MapQuickNav from "./components/mapQuickNav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map />
        <MapQuickNav />
      </div>
    );
  }
}

export default App;
