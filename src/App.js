import React, { Component } from "react";
import AppHeader from "./components/header";
import AppFooter from "./components/footer";
import NavList from "./components/nav_list";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    };
  }

  userHasAuthenticated(authenticated) {
    this.setState({ isAuthenticated: authenticated });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppHeader />
        </header>
        <NavList />
        <div className="App-footer">
          <AppFooter />
        </div>
      </div>
    );
  }
}

export default App;
