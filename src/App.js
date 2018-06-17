import React, { Component } from "react";
// import NavList from "./components/nav_list";
import "./App.css";
import Map from "./components/map";

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
        <Map />
      </div>
    );
  }
}

export default App;
