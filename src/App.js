import React, { Component } from "react";
import AppHeader from "./components/header";
import AppFooter from "./components/footer";
import NavList from "./components/nav_list";
import "./App.css";
// import "./style/styles.scss";
import Map from "./components/map";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppHeader />
        </header>
        {/* <AppNavigation /> */}
        {/* <NavList /> */}
        <Map />

        <div className="App-footer">
          <AppFooter />
        </div>
      </div>
    );
  }
}

export default App;
