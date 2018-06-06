import React, { Component } from "react";
import AppHeader from "./components/header";
import AppFooter from "./components/footer";
import NavList from "./components/nav_list";
import "./App.css";
import AppNavigation from "./components/navigation";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppHeader />
        </header>
        <AppNavigation />
        <NavList />
        <div className="App-footer">
          <AppFooter />
        </div>
      </div>
    );
  }
}

export default App;
