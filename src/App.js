import React, { Component } from "react";
import AppHeader from "./components/header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppHeader />
        </header>
      </div>
    );
  }
}

export default App;
