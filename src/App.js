import React, { Component } from "react";
// import NavList from "./components/nav_list";
import "./App.css";
import Map from "./components/map";
import MapLeftArrowButton from "./components/mapLeftArrowButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map />
        <MapLeftArrowButton />
      </div>
    );
  }
}

export default App;
